"""Model loading and initialization"""
import torch
from transformers import CLIPProcessor, CLIPModel
from diffusers import StableDiffusionPipeline
from cnn_extractor import CNNFeatureExtractor
import os

# Global models
clip_model = None
clip_processor = None
cnn_extractor = None
sd_pipeline = None
sd_refiner = None

def load_all_models():
    """Load all AI models at startup"""
    global clip_model, clip_processor, cnn_extractor, sd_pipeline, sd_refiner
    
    print("Loading CNN feature extractor (ResNet50)...")
    cnn_extractor = CNNFeatureExtractor()
    
    print("Loading CLIP model...")
    clip_model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
    clip_processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")
    
    IMAGE_GEN_PROVIDER = os.getenv("IMAGE_GEN_PROVIDER", "local")
    print(f"Using {IMAGE_GEN_PROVIDER} for image generation")
    
    if IMAGE_GEN_PROVIDER == "local":
        print("Loading Mo-Di Diffusion model...")
        base_model_id = "nitrosocke/mo-di-diffusion"
        # Always use CPU and float32 for Mo-Di Diffusion to avoid black image issues
        sd_pipeline = StableDiffusionPipeline.from_pretrained(
            base_model_id,
            torch_dtype=torch.float32
        )
        sd_pipeline = sd_pipeline.to("cpu")
        print("Using CPU for image generation with Mo-Di Diffusion (float32, 512x512)")
        # Disable NSFW filter
        sd_pipeline.safety_checker = None
        sd_refiner = None
    
    print("All models loaded successfully!")

def get_clip_model():
    return clip_model, clip_processor

def get_cnn_extractor():
    return cnn_extractor

def get_sd_pipeline():
    return sd_pipeline

def get_sd_refiner():
    return sd_refiner
