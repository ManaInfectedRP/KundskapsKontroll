import { API_URL } from '../config'

// Frontend Logger Utility
export const frontendLog = {
  log: async (level, message, details = '') => {
    const timestamp = new Date().toISOString()
    console.log(`[${level}] ${message}`, details)
    
    // Send to backend
    try {
      await fetch(`${API_URL}/log-frontend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level, message, details: JSON.stringify(details), timestamp })
      })
    } catch (err) {
      console.error('Failed to send log to backend:', err)
    }
  },
  info: (message, details) => frontendLog.log('INFO', message, details),
  error: (message, details) => frontendLog.log('ERROR', message, details),
  warning: (message, details) => frontendLog.log('WARNING', message, details)
}

export const loadRecentPrompts = async () => {
  const response = await fetch(`${API_URL}/prompts`)
  const data = await response.json()
  return data.prompts || []
}

export const generatePromptAPI = async (file, selectedStyle) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(`${API_URL}/generate-prompt?style=${selectedStyle}`, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to generate prompt: ${response.status}`)
  }

  return await response.json()
}

export const generateImageAPI = async (prompt, selectedStyle) => {
  const response = await fetch(`${API_URL}/generate-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: prompt,
      style: selectedStyle,
      num_inference_steps: 30,
      guidance_scale: 7.5
    })
  })

  if (!response.ok) {
    throw new Error('Failed to generate image')
  }

  return await response.json()
}

export const recreateImageAPI = async (file, selectedStyle) => {
  const formData = new FormData()
  formData.append('file', file)
  if (selectedStyle) {
    formData.append('style', selectedStyle)
  }

  const response = await fetch(`${API_URL}/recreate-image`, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to recreate image: ${response.status}`)
  }

  return await response.json()
}

export const recreatePromptAPI = async (prompt, selectedStyle) => {
  const response = await fetch(`${API_URL}/recreate-prompt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: prompt,
      style: selectedStyle
    })
  })

  if (!response.ok) {
    throw new Error('Failed to recreate prompt')
  }

  return await response.json()
}
