import sys
import os
import asyncio
import base64

# Add backend directory to sys.path so imports work
sys.path.append(os.path.join(os.getcwd(), 'backend'))

from backend.models import load_all_models
from backend.generators import generate_with_local_sd

async def main():
    print("Loading models...")
    load_all_models()
    
    print("Generating image...")
    try:
        # Simple prompt
        result = await generate_with_local_sd("A beautiful landscape with mountains and a lake, realistic, 8k")
        
        # Result is data:image/png;base64,...
        if result.startswith("data:"):
            result = result.split(",")[1]
        
        img_data = base64.b64decode(result)
        
        # Analyze if image is black
        # We can verify by checking if all bytes are 0 (unlikely for PNG) or mostly dark.
        # But just saving it and letting the user know is enough for now.
        
        with open("reproduction_output.png", "wb") as f:
            f.write(img_data)
        
        print(f"Image saved to reproduction_output.png. Size: {len(img_data)} bytes.")
        
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(main())
