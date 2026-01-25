from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import logging
from datetime import datetime
from dotenv import load_dotenv
from models import load_all_models
from routers import prompts, images, database

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('backend.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

app = FastAPI(title="Image to Prompt API with CNN")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(prompts.router, tags=["prompts"])
app.include_router(images.router, tags=["images"])
app.include_router(database.router, tags=["database"])

@app.on_event("startup")
async def startup_event():
    """Load AI models at startup"""
    logger.info("=" * 80)
    logger.info("Starting Image to Prompt API with CNN")
    logger.info(f"Startup time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    logger.info("=" * 80)
    load_all_models()
    logger.info("All models loaded successfully")

@app.get("/")
async def root():
    """Health check endpoint"""
    from models import get_clip_model
    clip_model, _ = get_clip_model()
    
    return {
        "status": "online",
        "message": "Image to Prompt API is running",
        "models_loaded": {
            "clip": clip_model is not None
        },
        "endpoints": {
            "/generate-prompt": "POST - Generate prompt from image",
            "/analyze-image": "POST - Analyze image features",
            "/generate-image": "POST - Generate image from prompt",
            "/recreate-image": "POST - Analyze uploaded image and generate AI recreation",
            "/styles": "GET - Get available styles",
            "/prompts": "GET - Get all saved prompts"
        }
    }

@app.get("/health")
async def health_check():
    """Detailed health check"""
    from models import get_clip_model
    clip_model, _ = get_clip_model()
    
    return {
        "status": "healthy",
        "models_loaded": {
            "clip": clip_model is not None
        }
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
