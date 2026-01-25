"""Image generation endpoints"""
from fastapi import APIRouter, HTTPException, File, UploadFile
from pydantic import BaseModel
from typing import Optional
import os
import io
import logging
from datetime import datetime
from PIL import Image
from generators import generate_with_openai, generate_with_stability, generate_with_local_sd
from models import get_cnn_extractor
import torch

router = APIRouter()
logger = logging.getLogger(__name__)

# API Configuration
IMAGE_GEN_PROVIDER = os.getenv("IMAGE_GEN_PROVIDER", "local")

class PromptRequest(BaseModel):
    prompt: str
    style: Optional[str] = None
    num_inference_steps: int = 25
    guidance_scale: float = 7.5

@router.post("/generate-image")
async def generate_image(data: PromptRequest):
    """
    Generate an image from a prompt using diffusion model.
    Applies style-specific enhancements based on selected style preset.
    
    Args:
        data: PromptRequest with prompt, style, and generation parameters
    
    Returns:
        Generated image as base64
    """
    logger.info("="*60)
    logger.info("[GENERATE-IMAGE] New image generation request")
    logger.info(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    logger.info(f"Provider: {IMAGE_GEN_PROVIDER}")
    logger.info(f"Style: {data.style}")
    logger.info(f"Inference steps: {data.num_inference_steps}")
    logger.info(f"Guidance scale: {data.guidance_scale}")
    logger.info(f"Prompt: {data.prompt}")
    
    try:
        # Use prompt as-is (already has style and quality modifiers from generate_prompt)
        prompt = data.prompt
        
        # Generate image using selected provider
        logger.info(f"Calling {IMAGE_GEN_PROVIDER} API...")
        if IMAGE_GEN_PROVIDER == "openai":
            image_url = await generate_with_openai(prompt)
            logger.info(f"OpenAI API call successful")
        elif IMAGE_GEN_PROVIDER == "stability":
            image_url = await generate_with_stability(prompt)
            logger.info(f"Stability AI API call successful")
        elif IMAGE_GEN_PROVIDER == "local":
            image_url = await generate_with_local_sd(prompt)
            logger.info(f"Local Stable Diffusion generation successful")
        else:
            raise HTTPException(status_code=400, detail=f"Unknown provider: {IMAGE_GEN_PROVIDER}")
        
        logger.info(f"Image generated successfully (length: {len(image_url)} chars)")
        logger.info("="*60 + "\n")
        
        return {
            "success": True,
            "image": image_url,
            "prompt": prompt,
            "style": data.style
        }
    except Exception as e:
        logger.error(f"[GENERATE-IMAGE] Error: {str(e)}")
        logger.error("="*60 + "\n")
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")

@router.post("/recreate-image")
async def recreate_image(
    file: UploadFile = File(...),
    style: Optional[str] = None
):
    """
    Analyze an uploaded image and generate a new AI image that closely matches it.
    
    This endpoint:
    1. Extracts detailed features using CNN (colors, composition, lighting, facial features)
    2. Generates a comprehensive prompt that captures all visual details
    3. Creates a new AI image from that prompt
    
    Args:
        file: Image file to analyze and recreate
        style: Optional style to apply (if None, uses detected style)
    
    Returns:
        Generated image that closely matches the original
    """
    logger.info("="*60)
    logger.info("[RECREATE-IMAGE] New image recreation request")
    logger.info(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    logger.info(f"Filename: {file.filename}")
    logger.info(f"Style: {style or 'auto-detect'}")
    logger.info(f"Provider: {IMAGE_GEN_PROVIDER}")
    
    try:
        # Get models
        cnn_extractor = get_cnn_extractor()
        
        # Read and process image
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        
        # Use generic caption (BLIP removed to save VRAM)
        base_caption = "a detailed photograph"
        logger.info("Step 1: Image loaded (BLIP caption generation skipped to save VRAM)")
        
        # 2. Extract comprehensive CNN features
        logger.info("Step 2: Analyzing image with CNN + InsightFace...")
        cnn_analysis = cnn_extractor.analyze_image(image)
        logger.info(f"Colors: {cnn_analysis['colors']['dominant']}")
        logger.info(f"Composition: {cnn_analysis['composition']['orientation']}")
        logger.info(f"Lighting: {cnn_analysis['composition']['lighting']}")
        logger.info(f"Faces detected: {cnn_analysis.get('facial_features', {}).get('faces_detected', 0)}")
        
        if cnn_analysis.get('facial_features', {}).get('faces_detected', 0) > 0:
            for idx, face in enumerate(cnn_analysis['facial_features']['features']):
                logger.info(f"  Face {idx+1}: Age={face.get('age')}, Gender={face.get('gender')}, Hair={face.get('hair_color')}, Skin={face.get('skin_tone')}")
        
        # 3. Build detailed prompt that captures the image
        logger.info("Step 3: Building comprehensive prompt...")
        detailed_prompt = build_recreation_prompt(
            base_caption=base_caption,
            cnn_analysis=cnn_analysis,
            style=style,
            image_size=image.size
        )
        logger.info(f"Generated Prompt: {detailed_prompt}")
        
        # 4. Generate new image using the detailed prompt
        logger.info(f"Step 4: Generating image with {IMAGE_GEN_PROVIDER}...")
        if IMAGE_GEN_PROVIDER == "openai":
            generated_image_url = await generate_with_openai(detailed_prompt)
            logger.info("OpenAI generation completed")
        elif IMAGE_GEN_PROVIDER == "stability":
            generated_image_url = await generate_with_stability(detailed_prompt)
            logger.info("Stability AI generation completed")
        elif IMAGE_GEN_PROVIDER == "local":
            generated_image_url = await generate_with_local_sd(detailed_prompt)
            logger.info("Local SD generation completed")
        else:
            raise HTTPException(status_code=400, detail=f"Unknown provider: {IMAGE_GEN_PROVIDER}")
        
        logger.info(f"Image recreation successful (output length: {len(generated_image_url)} chars)")
        logger.info("="*60 + "\n")
        
        return {
            "success": True,
            "original_size": image.size,
            "generated_image": generated_image_url,
            "prompt_used": detailed_prompt,
            "base_caption": base_caption,
            "analysis": {
                "colors": cnn_analysis['colors']['dominant'],
                "composition": cnn_analysis['composition']['orientation'],
                "lighting": cnn_analysis['composition']['lighting'],
                "facial_features": cnn_analysis.get('facial_features', {})
            },
            "style_applied": style
        }
        
    except Exception as e:
        logger.error(f"[RECREATE-IMAGE] Error: {str(e)}")
        logger.error("="*60 + "\n")
        raise HTTPException(status_code=500, detail=f"Error recreating image: {str(e)}")


def build_recreation_prompt(
    base_caption: str,
    cnn_analysis: dict,
    style: Optional[str],
    image_size: tuple
) -> str:
    """
    Build a comprehensive prompt that captures all details of the original image.
    Uses InsightFace data (age, gender, facial features) and CNN analysis for accurate recreation.
    
    Args:
        base_caption: Caption from BLIP
        cnn_analysis: CNN feature analysis (includes InsightFace facial data)
        style: Optional style to apply
        image_size: Original image dimensions
    
    Returns:
        Detailed prompt for image generation
    """
    # Start with style modifier and base caption
    prompt_parts = []
    if style:
        style_modifiers = {
            "realistic": "photorealistic, highly detailed",
            "artistic": "beautiful oil painting",
            "anime": "anime art style, vibrant detailed anime",
            "cyberpunk": "cyberpunk aesthetic, futuristic",
            "fantasy": "fantasy art, magical",
            "minimalist": "minimalist design, clean simple",
            "surreal": "surreal dreamlike scene",
            "vintage": "vintage photography, retro aesthetic",
            "watercolor": "soft watercolor painting",
            "sketch": "detailed pencil sketch"
        }
        if style.lower() in style_modifiers:
            prompt_parts.append(style_modifiers[style.lower()])
    else:
        prompt_parts.append("photorealistic, highly detailed")
        
    prompt_parts.append(base_caption)
    
    # Add simplified facial details if detected (from InsightFace)
    facial = cnn_analysis.get('facial_features', {})
    if facial.get('faces_detected', 0) > 0 and facial.get('features'):
        for face_feature in facial['features']:
            # Only add age/gender, hair color, skin tone, face shape, expression
            if face_feature.get('age') and face_feature.get('gender'):
                prompt_parts.append(f"{face_feature['age']} year old {face_feature['gender']}")
            elif face_feature.get('gender'):
                prompt_parts.append(face_feature['gender'])
            if face_feature.get('hair_color') and face_feature['hair_color'] != 'unknown':
                prompt_parts.append(face_feature['hair_color'])
            if face_feature.get('skin_tone') and face_feature['skin_tone'] != 'unknown':
                prompt_parts.append(face_feature['skin_tone'])
            if face_feature.get('face_shape'):
                prompt_parts.append(face_feature['face_shape'])
            if face_feature.get('expression') and face_feature['expression'] != 'neutral':
                prompt_parts.append(f"{face_feature['expression']} expression")
    
    # Add dominant color and lighting
    colors = cnn_analysis['colors']
    prompt_parts.append(colors['dominant'])
    comp = cnn_analysis['composition']
    prompt_parts.append(comp['lighting'])
    
    # Add quality enhancer
    prompt_parts.append("high quality, sharp focus")
    
    # Build final prompt
    final_prompt = ", ".join(prompt_parts)
    
    return final_prompt


@router.post("/log-frontend")
async def log_frontend(data: dict):
    """
    Receive logs from frontend and write to frontend.log
    
    Args:
        data: Log data from frontend (level, message, timestamp, etc.)
    """
    try:
        # Configure frontend logger if not already done
        frontend_logger = logging.getLogger('frontend')
        if not frontend_logger.handlers:
            handler = logging.FileHandler('frontend.log')
            handler.setFormatter(logging.Formatter('%(asctime)s - %(levelname)s - %(message)s'))
            frontend_logger.addHandler(handler)
            frontend_logger.setLevel(logging.INFO)
        
        level = data.get('level', 'info').upper()
        message = data.get('message', '')
        details = data.get('details', '')
        
        log_message = f"[FRONTEND] {message}"
        if details:
            log_message += f" | Details: {details}"
        
        if level == 'ERROR':
            frontend_logger.error(log_message)
        elif level == 'WARNING':
            frontend_logger.warning(log_message)
        else:
            frontend_logger.info(log_message)
        
        return {"success": True}
    except Exception as e:
        logger.error(f"Error logging frontend message: {str(e)}")
        return {"success": False, "error": str(e)}
