# Quick Start Guide

## Backend

1. Setup Python environment:
```bash
cd backend
python -m venv venv
cd backend && source venv/Scripts/activate # Windows
pip install -r requirements.txt
```

2. Start the server:
```bash
python main.py
```

Server will run at: http://localhost:8000
**Note:** First run will download AI models (~2-3 GB)

## Frontend

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Update API_URL in App.js with your computer's IP address:
```javascript
const API_URL = 'http://YOUR_IP_ADDRESS:8000';  // e.g., http://192.168.1.100:8000
```

3. Start Expo:
```bash
npm start
```

4. Scan QR code with Expo Go app on your phone

## Features

### Image Processing
- Capture images with camera
- Upload from gallery
- CLIP feature extraction
- BLIP image captioning

### Prompt Generation
- Multiple style presets (realistic, artistic, anime, cyberpunk, etc.)
- Prompt refinement and customization
- Add notes to prompts
- Save prompts to local database

### Image Generation (Experimental)
- Generate images from prompts using Stable Diffusion
- Image-to-image transformation
- Adjustable inference steps and guidance scale

### Prompt Management
- View all saved prompts
- Filter by style
- View creation timestamps
- Delete old prompts

## System Requirements

### Backend
- Python 3.8+
- GPU recommended (CUDA compatible for Stable Diffusion)
- 4+ GB RAM
- 5+ GB disk space (for models)

### Frontend
- iOS 13+ or Android 8+
- Expo Go app installed
- Same WiFi network as backend

## Notes

⚠️ **Important:**
- Use your computer's **IP address** in the mobile app (not localhost)
- Backend and mobile device must be on the **same network**
- First run downloads AI models (~2-3 GB)
- Stable Diffusion generates images more slowly than BLIP captions

## Troubleshooting

### "Connection refused" error
- Check backend is running
- Verify API_URL is correct IP address
- Ensure devices on same WiFi

### Models not loading
- Check internet connection
- Ensure 5+ GB free disk space
- Allow 5-10 minutes for first load

### Image generation is slow
- This is normal (takes 30-60 seconds)
- Using GPU (CUDA) will speed it up significantly
- Reduce `num_inference_steps` to 15-20 for faster results
