# Image to Prompt Generator & AI Image Recreation

## Features


## Architecture

### Backend 
Python: FastAPI
uvicorn
numpy
torch
torchvision
transformers
diffusers
python-dotnet
openai
requests
insightface
huggingface

### Frontend
React-18
vite

## Setup

### Backend Start

1. Start virtual machine:
```bash
source backend/venv/scripts/Activate
```

2. Start Backend Server:
```bash
py main.py
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Update the API URL in `App.js`:
```javascript
const API_URL = 'http://YOUR_IP_ADDRESS:8000';  // Replace with your backend URL
```

4. Start the development server:
```bash
npm run dev
```

**Available Styles:**
- `realistic` - Photorealistic recreation
- `artistic` - Oil painting style
- `anime` - Anime art style
- `cyberpunk` - Cyberpunk aesthetic
- `fantasy` - Fantasy art
- `minimalist` - Minimalist design
- `surreal` - Surreal dreamlike
- `vintage` - Vintage photography
- `watercolor` - Watercolor painting
- `sketch` - Pencil sketch

## 🚧 Future Enhancements

- [ ] if i can think of something in future.

## 📄 License

This project is open source and available under the MIT License.

## Contributing

This is a School Project.