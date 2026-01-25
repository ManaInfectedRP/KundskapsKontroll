"""Prompt generation and analysis endpoints"""
from fastapi import APIRouter, File, UploadFile, HTTPException
from pydantic import BaseModel
from PIL import Image
import torch
import io
from typing import Optional
from models import get_clip_model, get_cnn_extractor
from styles import get_enhanced_prompt, get_available_styles

router = APIRouter()

class RecreatePromptRequest(BaseModel):
    prompt: str
    style: Optional[str] = None

def get_style_keywords(style: str) -> str:
    """Get focused keywords for each style to emphasize in prompts"""
    style_focus = {
        "realistic": "photorealistic",
        "artistic": "oil painting",
        "anime": "anime art",
        "cyberpunk": "cyberpunk",
        "fantasy": "fantasy art",
        "minimalist": "minimalist",
        "surreal": "surreal",
        "vintage": "vintage photo",
        "watercolor": "watercolor",
        "sketch": "pencil sketch",
    }
    return style_focus.get(style, "")

@router.post("/generate-prompt")
async def generate_prompt(
    file: UploadFile = File(...),
    style: Optional[str] = None
):
    """
    Generate a text prompt from an uploaded image using CLIP and BLIP models.
    
    Args:
        file: Image file (JPEG, PNG, etc.)
        style: Optional style descriptor (e.g., "realistic", "artistic", "anime")
    
    Returns:
        Generated prompt suitable for text-to-image models
    """
    try:
        # Get models
        clip_model, clip_processor = get_clip_model()
        cnn_extractor = get_cnn_extractor()
        
        # Read and process image
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        
        # Use generic caption (BLIP removed to save VRAM)
        caption = "a detailed image"
        
        # Extract CNN features for color/mood analysis
        cnn_analysis = cnn_extractor.analyze_image(image)
        
        # Extract features using CLIP
        clip_inputs = clip_processor(images=image, return_tensors="pt")
        with torch.no_grad():
            image_features = clip_model.get_image_features(**clip_inputs)
        
        # Build simple, focused prompt (Mo-Di Diffusion style)
        # Format: "[style] [subject], [color mood if notable]"
        
        # Clean up caption - remove verbose BLIP descriptions
        clean_caption = caption.lower()
        # Remove common BLIP artifacts
        clean_caption = clean_caption.replace('there is a ', '')
        clean_caption = clean_caption.replace('a picture of ', '')
        clean_caption = clean_caption.replace('an image of ', '')
        
        if style:
            style_prefix = get_style_keywords(style)
            enhanced_prompt = f"{style_prefix} {clean_caption}"
        else:
            enhanced_prompt = clean_caption
        
        # Only add color mood if very distinctive
        dominant_color = cnn_analysis['colors']['dominant'].lower()
        if 'dark' in dominant_color and 'moody' in dominant_color:
            enhanced_prompt += ", muted colors"
        elif 'warm' in dominant_color and style not in ['vintage', 'watercolor']:
            enhanced_prompt += ", warm tones"
        elif 'cool' in dominant_color and style not in ['cyberpunk']:
            enhanced_prompt += ", cool tones"
        
        return {
            "success": True,
            "prompt": enhanced_prompt,
            "base_caption": caption,
            "cnn_analysis": {
                "colors": cnn_analysis['colors']['dominant'],
                "composition": cnn_analysis['composition']['orientation'],
                "lighting": cnn_analysis['composition']['lighting']
            },
            "style": style,
            "image_size": image.size
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@router.post("/analyze-image")
async def analyze_image(file: UploadFile = File(...)):
    """
    Analyze image and return detailed features.
    
    Args:
        file: Image file
    
    Returns:
        Image analysis including captions and features
    """
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        
        # Use generic caption (BLIP removed to save VRAM)
        caption = "a detailed image"
        
        return {
            "success": True,
            "caption": caption,
            "image_dimensions": {
                "width": image.size[0],
                "height": image.size[1]
            },
            "format": image.format
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error analyzing image: {str(e)}")

@router.get("/styles")
async def get_styles():
    """Get available style presets"""
    return {
        "styles": get_available_styles(),
        "total": len(get_available_styles())
    }

@router.post("/recreate-prompt")
async def recreate_prompt(data: RecreatePromptRequest):
    """Re-create a prompt with a different style focus
    
    Args:
        data: RecreatePromptRequest with existing prompt and new style
    
    Returns:
        New prompt focused on the selected style
    """
    try:
        base_prompt = data.prompt
        
        # Remove old style keywords and quality modifiers
        cleanup_keywords = [
            "photorealistic, highly detailed, 8k",
            "beautiful oil painting, artistic style, masterpiece",
            "anime art style, vibrant colors",
            "cyberpunk aesthetic, neon lights, futuristic",
            "fantasy art, magical atmosphere, enchanted",
            "minimalist design, clean and simple",
            "surreal dreamlike scene, imaginative",
            "vintage photography, retro aesthetic",
            "soft watercolor painting, delicate colors",
            "detailed pencil sketch, hand-drawn",
            "photorealistic", "oil painting", "anime art", "cyberpunk",
            "fantasy art", "minimalist", "surreal", "vintage photo",
            "watercolor", "pencil sketch",
            ", warm color palette", ", cool color palette",
            ", muted colors", ", cold color palette",
            ", warm tones", ", cool tones",
            ", detailed, 8k", "detailed, 8k"
        ]
        
        cleaned_prompt = base_prompt
        for keyword in cleanup_keywords:
            cleaned_prompt = cleaned_prompt.replace(keyword, "")
        
        cleaned_prompt = cleaned_prompt.strip().strip(',')
        
        # Apply new style
        if data.style:
            style_prefix = get_style_keywords(data.style)
            new_prompt = f"{style_prefix} {cleaned_prompt}"
        else:
            new_prompt = cleaned_prompt
        
        return {
            "success": True,
            "original_prompt": base_prompt,
            "new_prompt": new_prompt,
            "style": data.style
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error recreating prompt: {str(e)}")
