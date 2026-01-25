"""Image generation functions for different providers"""
import torch
import io
import base64
import requests
from openai import OpenAI
from fastapi import HTTPException
import os
from models import get_sd_pipeline, get_sd_refiner

# API Configuration
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
STABILITY_API_KEY = os.getenv("STABILITY_API_KEY")

async def generate_with_openai(prompt: str) -> str:
    """Generate image using OpenAI DALL-E"""
    if not OPENAI_API_KEY:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured")
    
    client = OpenAI(api_key=OPENAI_API_KEY)
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )
    return response.data[0].url

async def generate_with_stability(prompt: str) -> str:
    """Generate image using Stability AI"""
    if not STABILITY_API_KEY:
        raise HTTPException(status_code=500, detail="Stability API key not configured")
    
    url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"
    headers = {
        "Authorization": f"Bearer {STABILITY_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "text_prompts": [{"text": prompt}],
        "cfg_scale": 7,
        "height": 1024,
        "width": 1024,
        "steps": 30,
        "samples": 1,
    }
    
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code != 200:
        raise HTTPException(status_code=500, detail=f"Stability API error: {response.text}")
    
    result = response.json()
    img_data = result["artifacts"][0]["base64"]
    return f"data:image/png;base64,{img_data}"

async def generate_with_local_sd(prompt: str) -> str:
    """Generate image using local Stable Diffusion XL (base model only for VRAM efficiency)"""
    import logging
    from datetime import datetime
    from diffusers import DPMSolverMultistepScheduler
    logger = logging.getLogger(__name__)
    
    sd_pipeline = get_sd_pipeline()
    
    if not sd_pipeline:
        raise HTTPException(status_code=500, detail="Local Diffusion model not loaded")
    
    try:
        logger.info(f"Generating with Mo-Di Diffusion - Prompt: {prompt[:100]}...")
        
        # Clear CUDA cache before generation
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
            logger.info(f"CUDA memory before generation: {torch.cuda.memory_allocated() / 1024**3:.2f} GB")
        
        # Mo-Di Diffusion: 50 steps, 512x768 or 512x512, guidance_scale=7
        n_steps = 25
        height, width = 512, 768
        logger.info(f"Mo-Di Parameters: {n_steps} steps, {height}x{width}, guidance_scale=7.0")
        with torch.no_grad():
            result = sd_pipeline(
                prompt,
                negative_prompt="blurry, low quality, distorted, deformed, ugly, disfigured, bad anatomy, worst quality",
                num_inference_steps=n_steps,
                guidance_scale=7.0,
                height=height,
                width=width
            )
            image = result.images[0]
        
        # Clear cache after generation
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
        
        logger.info(f"Image generated - Size: {image.size}, Mode: {image.mode}")
        
        # Save image to disk for debugging
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_dir = "generated_images"
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, f"generated_{timestamp}.png")
        image.save(output_path, format="PNG", optimize=True)
        logger.info(f"Image saved to disk: {output_path}")
        
        # Convert to base64 with compression
        buffer = io.BytesIO()
        image.save(buffer, format="PNG", optimize=True)
        buffer.seek(0)
        buffer_size = len(buffer.getvalue())
        logger.info(f"PNG buffer size: {buffer_size} bytes ({buffer_size/1024:.1f} KB)")
        
        img_data = base64.b64encode(buffer.getvalue()).decode()
        logger.info(f"Base64 encoded length: {len(img_data)} chars")
        
        return f"data:image/png;base64,{img_data}"
    except Exception as e:
        logger.error(f"SDXL generation failed: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Local generation error: {str(e)}")
