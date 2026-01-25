"""
CNN-based feature extraction for enhanced prompt generation with facial analysis using InsightFace

This module uses:
- ResNet50 for general image feature extraction
- InsightFace for advanced facial analysis (age, gender, facial features)
- cv2 is used by InsightFace internally for image processing

Note: OpenCV Haar Cascades have been removed - using InsightFace exclusively for face detection.
"""
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import numpy as np
import cv2
from typing import Dict, List, Optional

try:
    from insightface.app import FaceAnalysis
    INSIGHTFACE_AVAILABLE = True
except ImportError:
    INSIGHTFACE_AVAILABLE = False
    print("Warning: InsightFace not available. Install with: pip install insightface onnxruntime")

class CNNFeatureExtractor:
    def __init__(self):
        # Load pre-trained ResNet50
        self.model = models.resnet50(pretrained=True)
        self.model.eval()
        
        # Remove the final classification layer to get features
        self.feature_extractor = torch.nn.Sequential(*list(self.model.children())[:-1])
        
        # Image preprocessing
        self.transform = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])
        
        # Initialize InsightFace
        if INSIGHTFACE_AVAILABLE:
            try:
                self.face_analyzer = FaceAnalysis(providers=['CPUExecutionProvider'])
                self.face_analyzer.prepare(ctx_id=0, det_size=(640, 640))
                self.use_insightface = True
                print("✓ InsightFace loaded successfully")
            except Exception as e:
                print(f"Error: InsightFace initialization failed: {e}")
                print("Facial analysis will not be available.")
                self.use_insightface = False
        else:
            print("Error: InsightFace not installed. Facial analysis disabled.")
            print("Install with: pip install insightface onnxruntime")
            self.use_insightface = False
        
        # ImageNet class names for object detection
        self.load_imagenet_classes()
        print("✓ Using OpenCV Haar Cascades (fallback)")
    
    def load_imagenet_classes(self):
        """Load ImageNet class labels"""
        self.classes = [
            'person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat',
            'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat',
            'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack',
            'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball',
            'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket',
            'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple',
            'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake',
            'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop',
            'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 'toaster', 'sink',
            'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier',
            'toothbrush', 'building', 'tree', 'flower', 'mountain', 'sky', 'ocean', 'beach',
            'forest', 'grass', 'snow', 'sunset', 'sunrise', 'night', 'city', 'street'
        ]
    
    def extract_features(self, image: Image.Image):
        """Extract CNN features from image"""
        img_tensor = self.transform(image).unsqueeze(0)
        
        with torch.no_grad():
            # Get feature vector
            features = self.feature_extractor(img_tensor)
            features = features.squeeze().numpy()
            
            # Get class predictions
            predictions = self.model(img_tensor)
            probabilities = torch.nn.functional.softmax(predictions[0], dim=0)
            
        return features, probabilities
    
    def analyze_image(self, image: Image.Image):
        """Analyze image and extract semantic information including facial features"""
        features, probabilities = self.extract_features(image)
        
        # Get top predictions
        top5_prob, top5_indices = torch.topk(probabilities, 5)
        
        # Analyze colors
        color_info = self.analyze_colors(image)
        
        # Analyze composition
        composition = self.analyze_composition(image)
        
        # Analyze facial features if faces are detected
        facial_analysis = self.analyze_facial_features(image)
        
        return {
            'features': features.tolist() if hasattr(features, 'tolist') else features,
            'top_objects': [
                {
                    'label': f'object_{int(idx)}',
                    'confidence': float(top5_prob[i])
                }
                for i, idx in enumerate(top5_indices)
            ],
            'colors': color_info,
            'composition': composition,
            'facial_features': facial_analysis
        }
    
    def analyze_colors(self, image: Image.Image):
        """Extract dominant colors from image"""
        img_array = np.array(image.resize((100, 100)))
        pixels = img_array.reshape(-1, 3)
        
        # Calculate mean color
        mean_color = pixels.mean(axis=0)
        
        # Determine color description
        r, g, b = mean_color
        if r > 200 and g > 200 and b > 200:
            dominant = 'bright and light'
        elif r < 50 and g < 50 and b < 50:
            dominant = 'dark and moody'
        elif r > g and r > b:
            dominant = 'warm and reddish'
        elif b > r and b > g:
            dominant = 'cool and blue'
        elif g > r and g > b:
            dominant = 'natural and green'
        else:
            dominant = 'balanced colors'
        
        return {
            'dominant': dominant,
            'mean_rgb': [int(r), int(g), int(b)]
        }
    
    def analyze_composition(self, image: Image.Image):
        """Analyze image composition"""
        width, height = image.size
        aspect_ratio = width / height
        
        if aspect_ratio > 1.5:
            orientation = 'wide landscape'
        elif aspect_ratio < 0.7:
            orientation = 'tall portrait'
        else:
            orientation = 'square composition'
        
        # Convert to grayscale and analyze brightness distribution
        gray = np.array(image.convert('L'))
        brightness = gray.mean()
        
        if brightness > 180:
            lighting = 'bright and high-key'
        elif brightness < 80:
            lighting = 'dark and low-key'
        else:
            lighting = 'balanced lighting'
        
        return {
            'orientation': orientation,
            'lighting': lighting,
            'resolution': f'{width}x{height}'
        }
    
    def analyze_facial_features(self, image: Image.Image) -> Dict:
        """Analyze facial features using InsightFace"""
        if not self.use_insightface:
            return {'faces_detected': 0, 'error': 'InsightFace not available'}
        
        return self.analyze_facial_features_insightface(image)
    
    def analyze_facial_features_insightface(self, image: Image.Image) -> Dict:
        """Analyze facial features using InsightFace (advanced)"""
        # Convert PIL to numpy array (RGB format for InsightFace)
        img_array = np.array(image)
        
        # Detect faces
        faces = self.face_analyzer.get(img_array)
        
        if len(faces) == 0:
            return {'faces_detected': 0}
        
        facial_features = {
            'faces_detected': len(faces),
            'features': []
        }
        
        for face in faces:
            # Extract face bounding box
            bbox = face.bbox.astype(int)
            x, y, x2, y2 = bbox[0], bbox[1], bbox[2], bbox[3]
            w, h = x2 - x, y2 - y
            
            # Get age and gender from InsightFace
            age = int(face.age) if hasattr(face, 'age') else None
            gender = 'male' if face.gender == 1 else 'female' if hasattr(face, 'gender') else None
            
            # Extract face region for detailed analysis
            face_roi = img_array[y:y2, x:x2]
            
            # Analyze facial attributes (all using RGB format)
            hair_color = self.detect_hair_color_from_image(img_array, x, y, w, h)
            beard_type = self.detect_beard_from_region(face_roi)
            mustache_type = self.detect_mustache_from_region(face_roi)
            skin_tone = self.analyze_skin_tone_from_array(face_roi)
            face_shape = self.determine_face_shape(w, h)
            expression = self.detect_expression_from_array(face_roi)
            
            face_analysis = {
                'face_width': int(w),
                'face_height': int(h),
                'age': age,
                'gender': gender,
                'hair_color': hair_color,
                'has_beard': beard_type != 'no beard',
                'beard_type': beard_type,
                'has_mustache': mustache_type != 'no mustache',
                'mustache_type': mustache_type,
                'skin_tone': skin_tone,
                'face_shape': face_shape,
                'expression': expression,
                'confidence': float(face.det_score) if hasattr(face, 'det_score') else 1.0
            }
            
            facial_features['features'].append(face_analysis)
        
        return facial_features
    
    # InsightFace helper methods (RGB format)
    
    def detect_hair_color_from_image(self, img: np.ndarray, x: int, y: int, w: int, h: int) -> str:
        """Detect hair color from image array (RGB format for InsightFace)"""
        # Sample hair region (above the face)
        hair_y_start = max(0, y - int(h * 0.3))
        hair_y_end = y
        hair_region = img[hair_y_start:hair_y_end, x:x+w]
        
        if hair_region.size == 0:
            return 'unknown'
        
        # Calculate mean color (RGB format)
        mean_color = hair_region.mean(axis=(0, 1))
        r, g, b = mean_color
        
        # Determine hair color
        brightness = (r + g + b) / 3
        
        if brightness < 50:
            return 'black hair'
        elif brightness < 100:
            return 'dark brown hair'
        elif brightness < 150:
            return 'brown hair'
        elif brightness < 200:
            if r > g and r > b and (r - g) > 20:
                return 'light brown hair'
            elif (r + g) > 280 and b < 150:
                return 'blonde hair'
            else:
                return 'light brown hair'
        else:
            if r > 220 and g > 220 and b > 220:
                return 'gray or white hair'
            else:
                return 'blonde hair'
    
    def detect_beard_from_region(self, face_roi: np.ndarray) -> str:
        """Detect beard from face region (RGB array)"""
        if face_roi.size == 0:
            return 'no beard'
        
        h, w = face_roi.shape[:2]
        # Convert to grayscale for analysis
        gray = cv2.cvtColor(face_roi, cv2.COLOR_RGB2GRAY)
        
        # Focus on lower third of face
        beard_region = gray[int(h*0.6):, :]
        
        if beard_region.size == 0:
            return 'no beard'
        
        # Analyze texture and darkness
        mean_darkness = beard_region.mean()
        std_dev = beard_region.std()
        
        # STRICTER thresholds to avoid false positives from shadows/clothing
        # Require very high texture (std_dev > 40) AND very dark (< 100)
        if std_dev > 40 and mean_darkness < 100:
            dark_pixels = np.sum(beard_region < 80)  # Much darker threshold
            total_pixels = beard_region.size
            coverage = dark_pixels / total_pixels
            
            # Higher coverage required
            if coverage > 0.4:
                return 'full beard'
            elif coverage > 0.25:
                return 'beard stubble'
            elif coverage > 0.15:
                return 'light stubble'
        
        return 'no beard'
    
    def detect_mustache_from_region(self, face_roi: np.ndarray) -> str:
        """Detect mustache from face region (RGB array)"""
        if face_roi.size == 0:
            return 'no mustache'
        
        h, w = face_roi.shape[:2]
        gray = cv2.cvtColor(face_roi, cv2.COLOR_RGB2GRAY)
        
        # Focus on upper lip area
        mustache_region = gray[int(h*0.55):int(h*0.65), int(w*0.25):int(w*0.75)]
        
        if mustache_region.size == 0:
            return 'no mustache'
        
        mean_darkness = mustache_region.mean()
        std_dev = mustache_region.std()
        
        # Stricter thresholds to avoid false positives from shadows
        if std_dev > 35 and mean_darkness < 95:
            dark_pixels = np.sum(mustache_region < 80)  # Darker threshold
            coverage = dark_pixels / mustache_region.size
            
            if coverage > 0.35:  # Higher coverage required
                return 'mustache'
        
        return 'no mustache'
    
    def analyze_skin_tone_from_array(self, face_roi: np.ndarray) -> str:
        """Analyze skin tone from RGB array"""
        if face_roi.size == 0:
            return 'unknown'
        
        mean_color = face_roi.mean(axis=(0, 1))
        r, g, b = mean_color
        
        brightness = (r + g + b) / 3
        
        if brightness > 200:
            return 'very light skin'
        elif brightness > 170:
            return 'light skin'
        elif brightness > 140:
            return 'medium-light skin'
        elif brightness > 110:
            return 'medium skin'
        elif brightness > 80:
            return 'dark skin'
        else:
            return 'very dark skin'
    
    def detect_expression_from_array(self, face_roi: np.ndarray) -> str:
        """Detect basic expression from face region (RGB)"""
        if face_roi.size == 0:
            return 'neutral'
        
        h, w = face_roi.shape[:2]
        gray = cv2.cvtColor(face_roi, cv2.COLOR_RGB2GRAY)
        
        # Analyze mouth region
        mouth_region = gray[int(h*0.65):, int(w*0.25):int(w*0.75)]
        
        if mouth_region.size == 0:
            return 'neutral'
        
        std_dev = mouth_region.std()
        mean_val = mouth_region.mean()
        
        if std_dev > 40:
            return 'smiling'
        elif mean_val < 80:
            return 'serious'
        else:
            return 'neutral'
    
    # Common helper methods
    
    def determine_face_shape(self, width: int, height: int) -> str:
        """Determine face shape from dimensions"""
        ratio = width / height
        
        if ratio > 0.9:
            return 'round face'
        elif ratio > 0.75:
            return 'square face'
        elif ratio > 0.65:
            return 'oval face'
        else:
            return 'long face'
    
    def generate_facial_description(self, facial_features: Dict) -> List[str]:
        """Generate natural language descriptions from facial analysis"""
        descriptions = []
        
        if not facial_features or facial_features.get('faces_detected', 0) == 0:
            return descriptions
        
        for face in facial_features.get('features', []):
            # Add age and gender (from InsightFace)
            if face.get('age') and face.get('gender'):
                descriptions.append(f"{face['age']} year old {face['gender']}")
            elif face.get('gender'):
                descriptions.append(face['gender'])
            
            # Add hair color
            if face.get('hair_color') and face['hair_color'] != 'unknown':
                descriptions.append(face['hair_color'])
            
            # Add beard info
            if face.get('beard_type') and face['beard_type'] != 'no beard':
                descriptions.append(face['beard_type'])
            
            # Add mustache
            if face.get('mustache_type') and face['mustache_type'] != 'no mustache':
                descriptions.append(face['mustache_type'])
            
            # Add skin tone
            if face.get('skin_tone') and face['skin_tone'] != 'unknown':
                descriptions.append(face['skin_tone'])
            
            # Add face shape
            if face.get('face_shape'):
                descriptions.append(face['face_shape'])
            
            # Add expression
            if face.get('expression') and face['expression'] != 'neutral':
                descriptions.append(f"{face['expression']} expression")
        
        return descriptions
    
    def generate_enhanced_description(self, analysis, base_caption):
        """Generate enhanced prompt from CNN analysis"""
        colors = analysis['colors']['dominant']
        composition = analysis['composition']
        
        # Build enhanced description
        enhancements = []
        enhancements.append(colors)
        enhancements.append(composition['lighting'])
        enhancements.append(composition['orientation'])
        
        # Add facial features if detected
        if analysis.get('facial_features') and analysis['facial_features'].get('faces_detected', 0) > 0:
            facial_desc = self.generate_facial_description(analysis['facial_features'])
            if facial_desc:
                enhancements.extend(facial_desc)
        
        enhanced = f"{base_caption}, {', '.join(enhancements)}"
        return enhanced
