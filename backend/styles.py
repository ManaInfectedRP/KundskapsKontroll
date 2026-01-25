# Style presets for image generation
STYLE_PRESETS = {
    "realistic": "photorealistic",
    "artistic": "oil painting",
    "anime": "anime art",
    "cyberpunk": "cyberpunk style, neon lights",
    "fantasy": "fantasy art, magical",
    "minimalist": "minimalist",
    "surreal": "surreal, dreamlike",
    "vintage": "vintage, retro",
    "watercolor": "watercolor painting",
    "sketch": "pencil sketch",
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
