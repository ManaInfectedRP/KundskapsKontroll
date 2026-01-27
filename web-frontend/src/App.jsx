import { useState, useEffect, useRef } from 'react'
import './App.css'
import { API_URL, STYLE_PRESETS } from './config'
import { 
  frontendLog, 
  loadRecentPrompts, 
  generatePromptAPI, 
  generateImageAPI, 
  recreateImageAPI, 
  recreatePromptAPI 
} from './utils/api'
import HomeScreen from './components/HomeScreen'
import ChatRoom from './components/ChatRoom'
import { mockChatRoomData } from './mockChatRoomData'

// Set to true to show ChatRoom with mock data for design
const MOCK_CHATROOM = false;

function App() {
  const [selectedStyle, setSelectedStyle] = useState('realistic')
  const [capturedImage, setCapturedImage] = useState(null)
  const [generatedPrompt, setGeneratedPrompt] = useState(null)
  const [generatedImage, setGeneratedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)
  const [recentPrompts, setRecentPrompts] = useState([])
  const [analysisData, setAnalysisData] = useState(null)
  const [useRecreateMode, setUseRecreateMode] = useState(true)
  const [inChatRoom, setInChatRoom] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)
  const chatScrollRef = useRef(null)

  useEffect(() => {
    frontendLog.info('Application Started', { 
      timestamp: new Date().toISOString(),
      apiUrl: API_URL,
      defaultMode: useRecreateMode ? 'recreation' : 'prompt-generation'
    })
    loadPrompts()
  }, [])

  const loadPrompts = async () => {
    try {
      const prompts = await loadRecentPrompts()
      setRecentPrompts(prompts.slice(0, 6))
    } catch (error) {
      console.error('Error loading prompts:', error)
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setCapturedImage(reader.result)
      setInChatRoom(true)
    }
    reader.readAsDataURL(file)

    if (useRecreateMode) {
      await recreateImage(file)
    } else {
      await generatePrompt(file)
    }
  }

  const resetSession = () => {
    setCapturedImage(null)
    setGeneratedPrompt(null)
    setGeneratedImage(null)
    setAnalysisData(null)
    setInChatRoom(false)
  }

  const generatePrompt = async (file) => {
    setIsLoading(true)
    setGeneratedPrompt(null)

    frontendLog.info('Generate Prompt - Started', { 
      mode: 'prompt-generation',
      filename: file.name, 
      fileSize: file.size, 
      style: selectedStyle 
    })

    try {
      frontendLog.info('API Call - Generate Prompt', { 
        endpoint: '/generate-prompt', 
        method: 'POST', 
        style: selectedStyle 
      })

      const data = await generatePromptAPI(file, selectedStyle)
      
      frontendLog.info('Generate Prompt - Success', { 
        prompt: data.prompt,
        confidence: data.confidence,
        analysis: data.analysis 
      })
      
      setGeneratedPrompt(data)
      await loadPrompts()
    } catch (error) {
      frontendLog.error('Generate Prompt - Exception', { error: error.message })
      alert(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const generateImage = async () => {
    if (!generatedPrompt) return

    setIsGeneratingImage(true)
    
    frontendLog.info('Generate Image - Started', { 
      prompt: generatedPrompt.prompt, 
      style: selectedStyle,
      steps: 30,
      guidance: 7.5
    })
    
    try {
      frontendLog.info('API Call - Generate Image', { 
        endpoint: '/generate-image', 
        method: 'POST' 
      })
      
      const data = await generateImageAPI(generatedPrompt.prompt, selectedStyle)
      
      if (data.success) {
        frontendLog.info('Generate Image - Success', { 
          imageLength: data.image.length,
          promptUsed: data.prompt 
        })
        setGeneratedImage(data.image)
      }
    } catch (error) {
      frontendLog.error('Generate Image - Exception', { error: error.message })
      alert(`Error generating image: ${error.message}`)
    } finally {
      setIsGeneratingImage(false)
    }
  }

  const recreateImage = async (file) => {
    setIsLoading(true)
    setIsGeneratingImage(true)
    setGeneratedPrompt(null)
    setGeneratedImage(null)
    setAnalysisData(null)

    frontendLog.info('Recreate Image - Started', { 
      mode: 'image-recreation',
      filename: file.name, 
      fileSize: file.size, 
      style: selectedStyle || 'auto-detect' 
    })

    try {
      frontendLog.info('API Call - Recreate Image', { 
        endpoint: '/recreate-image', 
        method: 'POST',
        style: selectedStyle || 'auto-detect'
      })
      
      const data = await recreateImageAPI(file, selectedStyle)
      
      frontendLog.info('Recreate Image - Success', { 
        baseCaption: data.base_caption,
        promptUsed: data.prompt_used,
        facesDetected: data.analysis?.facial_features?.faces_detected || 0,
        colors: data.analysis?.colors,
        lighting: data.analysis?.lighting,
        imageLength: data.generated_image?.length || 0
      })
      
      if (data.success) {
        setGeneratedPrompt({ 
          prompt: data.prompt_used,
          base_caption: data.base_caption 
        })
        setGeneratedImage(data.generated_image)
        setAnalysisData(data.analysis)
      }
    } catch (error) {
      frontendLog.error('Recreate Image - Exception', { error: error.message })
      alert(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
      setIsGeneratingImage(false)
    }
  }

  const recreatePrompt = async () => {
    if (!generatedPrompt) return

    setIsLoading(true)
    try {
      const data = await recreatePromptAPI(generatedPrompt.prompt, selectedStyle)
      setGeneratedPrompt({ ...generatedPrompt, prompt: data.new_prompt })
    } catch (error) {
      alert(`Error recreating prompt: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const useRecentPrompt = (prompt) => {
    setGeneratedPrompt({ prompt: prompt.prompt, base_caption: prompt.base_caption })
  }

  // Handle prompt submit for /generate-image
  const handlePromptSubmit = async (promptText) => {
    if (!promptText.trim()) return;
    setIsGeneratingImage(true);
    setGeneratedPrompt({ prompt: promptText });
    setGeneratedImage(null);
    setAnalysisData(null);
    setInChatRoom(true);
    try {
      frontendLog.info('API Call - Generate Image (prompt input)', { endpoint: '/generate-image', prompt: promptText, style: selectedStyle });
      const data = await generateImageAPI(promptText, selectedStyle);
      if (data.success) {
        setGeneratedImage(data.image);
        setGeneratedPrompt({ prompt: data.prompt });
      }
    } catch (error) {
      frontendLog.error('Generate Image (prompt input) - Exception', { error: error.message });
      alert(`Error generating image: ${error.message}`);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="app">
      {MOCK_CHATROOM ? (
        <ChatRoom
          capturedImage={mockChatRoomData.capturedImage}
          useRecreateMode={mockChatRoomData.useRecreateMode}
          isLoading={mockChatRoomData.isLoading}
          generatedPrompt={mockChatRoomData.generatedPrompt}
          analysisData={mockChatRoomData.analysisData}
          isGeneratingImage={mockChatRoomData.isGeneratingImage}
          generatedImage={mockChatRoomData.generatedImage}
          resetSession={() => {}}
          generateImage={() => {}}
          recreatePrompt={() => {}}
          chatScrollRef={chatScrollRef}
        />
      ) : !inChatRoom ? (
        <HomeScreen 
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          recentPrompts={recentPrompts}
          useRecentPrompt={useRecentPrompt}
          useRecreateMode={useRecreateMode}
          setUseRecreateMode={setUseRecreateMode}
          fileInputRef={fileInputRef}
          cameraInputRef={cameraInputRef}
          handleImageUpload={handleImageUpload}
          carouselIndex={carouselIndex}
          setCarouselIndex={setCarouselIndex}
          handlePromptSubmit={handlePromptSubmit}
        />
      ) : (
        <ChatRoom 
          capturedImage={capturedImage}
          useRecreateMode={useRecreateMode}
          isLoading={isLoading}
          generatedPrompt={generatedPrompt}
          analysisData={analysisData}
          isGeneratingImage={isGeneratingImage}
          generatedImage={generatedImage}
          resetSession={resetSession}
          generateImage={generateImage}
          recreatePrompt={recreatePrompt}
          chatScrollRef={chatScrollRef}
          selectedStyle={STYLE_PRESETS.find(s => s.id === selectedStyle)}
          setSelectedStyle={setSelectedStyle}
        />
      )}
    </div>
  )
}

export default App
