"""Database CRUD endpoints for saved prompts"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from database import PromptsDatabase
from styles import get_enhanced_prompt

router = APIRouter()
db = PromptsDatabase()

class PromptData(BaseModel):
    prompt: str
    base_caption: Optional[str] = None
    style: Optional[str] = None
    notes: Optional[str] = None

class SavedPromptResponse(BaseModel):
    id: int
    prompt: str
    base_caption: Optional[str]
    style: Optional[str]
    notes: Optional[str]
    created_at: str

@router.post("/refine-prompt")
async def refine_prompt(data: PromptData):
    """
    Refine and customize a prompt with style and notes.
    
    Args:
        data: PromptData with prompt, style, and optional notes
    
    Returns:
        Refined prompt with metadata
    """
    try:
        refined_prompt = data.prompt
        
        if data.style:
            refined_prompt = get_enhanced_prompt(data.prompt, data.style)
        
        # Add notes if provided
        if data.notes:
            refined_prompt = f"{refined_prompt}\n\nNotes: {data.notes}"
        
        # Save to database
        saved = db.add_prompt({
            "prompt": refined_prompt,
            "base_caption": data.base_caption,
            "style": data.style,
            "notes": data.notes
        })
        
        return {
            "success": True,
            "prompt_id": saved['id'],
            "refined_prompt": refined_prompt,
            "created_at": saved['created_at']
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error refining prompt: {str(e)}")

@router.get("/prompts")
async def get_all_prompts():
    """Get all saved prompts"""
    prompts = db.get_all_prompts()
    return {
        "success": True,
        "prompts": prompts,
        "total": len(prompts)
    }

@router.get("/prompts/{prompt_id}")
async def get_prompt(prompt_id: int):
    """Get a specific saved prompt"""
    prompt = db.get_prompt(prompt_id)
    if not prompt:
        raise HTTPException(status_code=404, detail="Prompt not found")
    
    return {
        "success": True,
        "prompt": prompt
    }

@router.put("/prompts/{prompt_id}")
async def update_prompt(prompt_id: int, data: PromptData):
    """Update a saved prompt"""
    updated = db.update_prompt(prompt_id, {
        "prompt": data.prompt,
        "base_caption": data.base_caption,
        "style": data.style,
        "notes": data.notes
    })
    
    if not updated:
        raise HTTPException(status_code=404, detail="Prompt not found")
    
    return {
        "success": True,
        "prompt": updated
    }

@router.delete("/prompts/{prompt_id}")
async def delete_prompt(prompt_id: int):
    """Delete a saved prompt"""
    success = db.delete_prompt(prompt_id)
    
    if not success:
        raise HTTPException(status_code=404, detail="Prompt not found")
    
    return {
        "success": True,
        "message": "Prompt deleted successfully"
    }
