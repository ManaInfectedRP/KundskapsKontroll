# Style presets for image generation - Rich descriptors for better AI image generation
STYLE_PRESETS = {
    "realistic": "photorealistic, professional photography, sharp focus, natural lighting, detailed textures, professional color grading, cinematic quality, ultra high resolution",
    
    "artistic": "oil painting, expressive brushstrokes, rich color palette, dynamic lighting, textured impasto technique, gallery-quality artwork, masterful composition, warm and inviting atmosphere",
    
    "anime": "Japanese anime style, cel-shading, expressive large eyes, distinctive character design, dynamic action poses, vibrant colors, black line art, emotional expressions, anime background details",
    
    "japaneseRetro": "Japanese anime character from 1980s retro-futuristic style, thick distinctive lines, somewhat exaggerated facial features, cel-shaded coloring, vibrant but slightly unsaturated colors, dramatic neon lighting, nostalgic and hand-painted aesthetic, energetic and stylized composition, 1980s anime illustration quality",
    
    "cyberpunk": "cyberpunk aesthetic, neon-soaked environment, glowing holographic displays, blade runner inspired, moody atmospheric lighting, rain-slicked streets, futuristic architecture, dramatic shadows, vibrant electric colors contrasting with dark backgrounds, high-tech and dystopian, cinematic composition",
    
    "fantasy": "fantasy illustration, magical atmosphere, epic fantasy art style, detailed armor and weapons, mystical lighting with glowing elements, rich fantasy landscapes, dramatic sky, heroic poses, storybook quality, enchanted and otherworldly aesthetic",
    
    "minimalist": "minimalist design, clean lines, simple geometric shapes, spacious composition, minimal color palette, negative space emphasis, modern aesthetic, elegant and refined, high contrast, sophisticated simplicity",
    
    "surreal": "surreal dreamlike art, impossible geometry, warped perspectives, floating elements, melting textures, dreamscape atmosphere, mysterious and thought-provoking, soft focus with sharp details, ethereal lighting, psychological and abstract elements",
    
    "vintage": "vintage 1970s aesthetic, faded color palette, analog film quality, warm nostalgic tones, retro typography elements, aged paper texture, classic illustration style, period-appropriate design, soft focus and vignette effects",
    
    "watercolor": "watercolor painting, soft washes of color, flowing pigments, delicate details, paper texture visible, loose brushwork, translucent layers, dreamy quality, gentle color transitions, artistic and organic look",
    
    "sketch": "detailed pencil sketch, crosshatching technique, shading depth, line work emphasis, artistic rendering, sketch pad texture, grayscale or sepia tones, careful attention to proportions, expressive line quality, gallery sketch quality",
}

def get_enhanced_prompt(base_prompt: str, style: str = None) -> str:
    """
    Enhance a prompt with style descriptors.
    
    Args:
        base_prompt: The base prompt from image analysis
        style: Style key from STYLE_PRESETS
    
    Returns:
        Enhanced prompt with style descriptors
    """
    if style and style in STYLE_PRESETS:
        return f"{base_prompt}, {STYLE_PRESETS[style]}"
    return base_prompt

def get_available_styles():
    """Return list of available style presets"""
    return list(STYLE_PRESETS.keys())
