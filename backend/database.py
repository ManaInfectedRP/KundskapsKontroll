import json
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Optional

PROMPTS_DB_FILE = "prompts_db.json"

class PromptsDatabase:
    """Simple JSON-based database for storing prompts"""
    
    def __init__(self, db_file: str = PROMPTS_DB_FILE):
        self.db_file = db_file
        self.ensure_db_exists()
    
    def ensure_db_exists(self):
        """Create database file if it doesn't exist"""
        if not Path(self.db_file).exists():
            self.save_prompts([])
    
    def load_prompts(self) -> List[Dict]:
        """Load all prompts from database"""
        try:
            with open(self.db_file, 'r') as f:
                return json.load(f)
        except:
            return []
    
    def save_prompts(self, prompts: List[Dict]):
        """Save prompts to database"""
        with open(self.db_file, 'w') as f:
            json.dump(prompts, f, indent=2)
    
    def add_prompt(self, prompt_data: Dict) -> Dict:
        """Add a new prompt to the database"""
        prompts = self.load_prompts()
        
        # Add metadata
        prompt_data['id'] = len(prompts) + 1
        prompt_data['created_at'] = datetime.now().isoformat()
        
        prompts.append(prompt_data)
        self.save_prompts(prompts)
        
        return prompt_data
    
    def get_prompt(self, prompt_id: int) -> Optional[Dict]:
        """Get a specific prompt by ID"""
        prompts = self.load_prompts()
        for prompt in prompts:
            if prompt.get('id') == prompt_id:
                return prompt
        return None
    
    def get_all_prompts(self) -> List[Dict]:
        """Get all prompts"""
        return self.load_prompts()
    
    def update_prompt(self, prompt_id: int, updated_data: Dict) -> Optional[Dict]:
        """Update a prompt"""
        prompts = self.load_prompts()
        
        for i, prompt in enumerate(prompts):
            if prompt.get('id') == prompt_id:
                prompt.update(updated_data)
                prompt['updated_at'] = datetime.now().isoformat()
                prompts[i] = prompt
                self.save_prompts(prompts)
                return prompt
        
        return None
    
    def delete_prompt(self, prompt_id: int) -> bool:
        """Delete a prompt"""
        prompts = self.load_prompts()
        
        for i, prompt in enumerate(prompts):
            if prompt.get('id') == prompt_id:
                prompts.pop(i)
                self.save_prompts(prompts)
                return True
        
        return False
