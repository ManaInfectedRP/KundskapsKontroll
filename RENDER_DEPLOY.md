# Deploying KundskapsKontrollen to Render.com

This guide explains how to deploy the full-stack Image to Prompt app (FastAPI backend + React frontend) to Render.com.

## Overview

The app consists of:
- **Backend**: FastAPI server with AI models for image processing and prompt generation
- **Frontend**: React app built with Vite, served statically by the backend

For simplicity, the backend serves the built frontend as static files, so only one Render web service is needed.

## Prerequisites

- GitHub account
- Render.com account (free tier available)
- Project pushed to a GitHub repository
- API keys for external services (OpenAI, Stability AI, Hugging Face) if using non-local image generation

## Deployment Steps

### 1. Prepare the Code

Ensure your repository has the latest changes:

```bash
# Build the frontend
cd web-frontend
npm install
npm run build

# Copy built files to backend
cp -r dist/* ../backend/static/

# Commit and push
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Create Render Web Service

1. Go to [Render.com](https://render.com) and sign in.
2. Click "New" > "Web Service".
3. Connect your GitHub repository.
4. Configure the service:
   - **Name**: `kundskaps-kontrollen` (or your choice)
   - **Runtime**: Python 3
   - **Root Directory**: `backend/` (important: this sets the working directory)
   - **Build Command**: Leave blank (auto-installs requirements.txt)
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### 3. Environment Variables

In Render dashboard, add these environment variables under "Environment":

```
# Required for production
ALLOWED_ORIGINS=https://your-render-app-url.onrender.com

# Model settings (adjust as needed)
CLIP_MODEL=openai/clip-vit-base-patch32
BLIP_MODEL=Salesforce/blip-image-captioning-base
IMAGE_GEN_PROVIDER=local

# API Keys (get from respective services)
OPENAI_API_KEY=your_openai_key
STABILITY_API_KEY=your_stability_key
HUGGINGFACE_API_KEY=your_huggingface_key
HUGGINGFACE_HUB_TOKEN=your_huggingface_token
```

**Security Note**: Never commit API keys to the repository. Use Render's environment variables.

### 4. Deploy

Click "Create Web Service". Render will:
- Clone your repo
- Set working directory to `backend/`
- Install Python dependencies from `requirements.txt`
- Start the server with uvicorn

The first deployment may take 10-15 minutes due to model loading.

### 5. Access Your App

Once deployed, your app will be available at: `https://your-service-name.onrender.com`

- Frontend: Root URL serves the React app
- API: Available at `/api/*` endpoints
- Health check: `/api/health`

## Alternative: Separate Frontend Deployment

If you prefer separate services:

### Backend Service
- Same as above, but remove the static file mounting from `main.py`
- API endpoints at root `/`

### Frontend Service
- **Runtime**: Static Site
- **Root Directory**: `web-frontend/`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist/`
- Update `config.js` API_URL to the backend service URL

## Troubleshooting

### Build Failures
- Check Render logs for errors
- Ensure all dependencies are in `requirements.txt`
- Verify root directory is set to `backend/`

### Runtime Issues
- Model loading timeout: Increase Render's service timeout or optimize model loading
- Memory limits: Free tier has 512MB RAM; upgrade for AI workloads
- CORS errors: Update `ALLOWED_ORIGINS` in environment variables

### API Key Issues
- Ensure keys are set in Render environment, not in `.env`
- Check service logs for authentication errors

### Static Files Not Serving
- Confirm `static/` directory exists in `backend/`
- Verify `StaticFiles` mount in `main.py`

## Performance Considerations

- **Free Tier Limitations**: 512MB RAM, 750 hours/month
- **Model Loading**: First request may be slow; consider caching or background loading
- **Scaling**: For production use, consider paid plans with more resources

## Updating the App

1. Make changes locally
2. Rebuild frontend if changed: `npm run build` in `web-frontend/`
3. Copy to `backend/static/` if frontend updated
4. Commit and push changes
5. Render auto-deploys on push to main branch

## Support

- Render Docs: https://docs.render.com/
- FastAPI Docs: https://fastapi.tiangolo.com/
- React Docs: https://react.dev/

For app-specific issues, check the backend logs in Render dashboard.</content>
<parameter name="filePath">c:\Users\quo\repos\KundskapsKontrollen\RENDER_DEPLOY.md