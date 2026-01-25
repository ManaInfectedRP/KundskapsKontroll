"""
Test script for the /recreate-image endpoint
"""
import requests
import base64
import sys
from pathlib import Path

def test_recreate_image(image_path: str, style: str = "realistic", output_path: str = "generated.png"):
    """
    Test the image recreation endpoint
    
    Args:
        image_path: Path to the image to recreate
        style: Style to apply (realistic, artistic, anime, etc.)
        output_path: Where to save the generated image
    """
    url = "http://localhost:8000/recreate-image"
    
    # Check if image exists
    if not Path(image_path).exists():
        print(f"❌ Error: Image not found at {image_path}")
        return
    
    print(f"🔄 Uploading and analyzing: {image_path}")
    print(f"🎨 Style: {style}")
    print("-" * 50)
    
    try:
        # Send request
        with open(image_path, "rb") as f:
            files = {"file": f}
            data = {"style": style} if style else {}
            response = requests.post(url, files=files, data=data)
        
        if response.status_code != 200:
            print(f"❌ Error: {response.status_code}")
            print(response.text)
            return
        
        result = response.json()
        
        # Display analysis
        print("✅ Analysis complete!")
        print(f"\n📝 Base Caption: {result['base_caption']}")
        print(f"\n🎯 Generated Prompt:")
        print(f"   {result['prompt_used']}")
        
        # Display detailed analysis
        analysis = result['analysis']
        print(f"\n🔍 Visual Analysis:")
        print(f"   Colors: {analysis['colors']}")
        print(f"   Composition: {analysis['composition']}")
        print(f"   Lighting: {analysis['lighting']}")
        
        # Display facial features if detected
        facial = analysis.get('facial_features', {})
        if facial.get('faces_detected', 0) > 0:
            print(f"\n👤 Facial Features Detected ({facial['faces_detected']} face(s)):")
            for i, face in enumerate(facial.get('features', []), 1):
                print(f"\n   Face #{i}:")
                if face.get('hair_color'):
                    print(f"      Hair: {face['hair_color']}")
                if face.get('has_beard'):
                    print(f"      Beard: {face['beard_type']}")
                if face.get('has_mustache'):
                    print(f"      Mustache: {face['mustache_type']}")
                if face.get('eye_size'):
                    print(f"      Eyes: {face['eye_size']}")
                if face.get('skin_tone'):
                    print(f"      Skin: {face['skin_tone']}")
                if face.get('face_shape'):
                    print(f"      Shape: {face['face_shape']}")
                if face.get('expression'):
                    print(f"      Expression: {face['expression']}")
        else:
            print("\n👤 No faces detected")
        
        # Save generated image
        img_data = result['generated_image']
        if img_data.startswith('data:'):
            img_data = img_data.split(',')[1]
        
        with open(output_path, "wb") as f:
            f.write(base64.b64decode(img_data))
        
        print(f"\n💾 Generated image saved to: {output_path}")
        print(f"📐 Original size: {result['original_size']}")
        print("\n✨ Done!")
        
    except requests.exceptions.ConnectionError:
        print("❌ Error: Could not connect to the server.")
        print("   Make sure the backend is running (python backend/main.py)")
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        import traceback
        traceback.print_exc()

def main():
    """Main function with CLI"""
    if len(sys.argv) < 2:
        print("Usage: python test_recreate.py <image_path> [style] [output_path]")
        print("\nExamples:")
        print("  python test_recreate.py photo.jpg")
        print("  python test_recreate.py photo.jpg artistic")
        print("  python test_recreate.py photo.jpg realistic output.png")
        print("\nAvailable styles:")
        print("  realistic, artistic, anime, cyberpunk, fantasy,")
        print("  minimalist, surreal, vintage, watercolor, sketch")
        return
    
    image_path = sys.argv[1]
    style = sys.argv[2] if len(sys.argv) > 2 else "realistic"
    output_path = sys.argv[3] if len(sys.argv) > 3 else "generated.png"
    
    test_recreate_image(image_path, style, output_path)

if __name__ == "__main__":
    main()
