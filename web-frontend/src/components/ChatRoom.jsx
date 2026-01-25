export default function ChatRoom({
  capturedImage,
  useRecreateMode,
  isLoading,
  generatedPrompt,
  analysisData,
  isGeneratingImage,
  generatedImage,
  resetSession,
  generateImage,
  recreatePrompt,
  chatScrollRef
}) {
  const downloadImage = () => {
    if (!generatedImage) return
    
    // Create a download link
    const link = document.createElement('a')
    link.href = generatedImage
    link.download = `generated_${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="chat-room">
      <header className="chat-header">
        <button className="back-btn" onClick={resetSession}>← Tillbaka</button>
        <h2>Bildåterskapning</h2>
        <div className="header-spacer"></div>
      </header>

      <div className="chat-container" ref={chatScrollRef}>
        {/* Uploaded Image at Top */}
        <div className="chat-message user-message">
          <div className="message-content">
            <img src={capturedImage} alt="Uploaded" className="chat-image" />
            <div className="message-label">
              {useRecreateMode ? '🎨 Återskapa denna bild' : '💭 Generera prompt'}
            </div>
          </div>
        </div>

        {/* Loading */}
        {isLoading && !generatedPrompt && (
          <div className="chat-message ai-message">
            <div className="message-content loading-content">
              <div className="spinner"></div>
              <p>Analyserar bild...</p>
            </div>
          </div>
        )}

        {/* Generated Prompt */}
        {generatedPrompt && (
          <div className="chat-message ai-message">
            <div className="message-content">
              <div className="message-label">💬 Genererad prompt:</div>
              <div className="prompt-box">
                {generatedPrompt.prompt}
              </div>
              {analysisData && (
                <div className="analysis-chips">
                  <span className="chip">🎨 {analysisData.colors}</span>
                  <span className="chip">💡 {analysisData.lighting}</span>
                  {analysisData.facial_features?.faces_detected > 0 && (
                    <span className="chip">
                      👤 {analysisData.facial_features.faces_detected} ansikte(n)
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Loading Image */}
        {isGeneratingImage && !generatedImage && (
          <div className="chat-message ai-message">
            <div className="message-content loading-content">
              <div className="message-label">Skapar bild...</div>
              <div className="gradient-placeholder"></div>
            </div>
          </div>
        )}

        {/* Generated Image */}
        {generatedImage && (
          <div className="chat-message ai-message">
            <div className="message-content">
              <div className="message-label">✨ Färdig bild:</div>
              <img 
                src={generatedImage} 
                alt="Generated" 
                className="chat-image generated"
                onError={(e) => {
                  console.error('Image failed to load:', generatedImage.substring(0, 100))
                  e.target.style.border = '2px solid red'
                }}
                onLoad={(e) => {
                  console.log('Image loaded successfully, dimensions:', e.target.naturalWidth, 'x', e.target.naturalHeight)
                }}
              />
              <button className="download-image-btn" onClick={downloadImage}>
                ⬇️ Ladda ner bild
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="chat-actions">
        {generatedPrompt && !isGeneratingImage && (
          <>
            {!generatedImage && (
              <button className="action-btn primary" onClick={generateImage}>
                🎨 {useRecreateMode ? 'Generera bild från prompt' : 'Generera bild'}
              </button>
            )}
            <button 
              className="action-btn secondary" 
              onClick={recreatePrompt}
              disabled={isLoading}
            >
              🔄 Ändra stil
            </button>
            {generatedImage && (
              <button className="action-btn success" onClick={resetSession}>
                ✨ Skapa ny bild
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
