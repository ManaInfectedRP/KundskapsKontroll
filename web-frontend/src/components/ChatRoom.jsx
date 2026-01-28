import React, { useState } from 'react';
import { Image, Download, Sparkles, Mic, ArrowLeft } from 'lucide-react';
import { STYLE_PRESETS } from '../config.js';

export default function ChatRoom({
  onBackToHome,
  initialPrompt = '',
  selectedStyle = null,
  setSelectedStyle,
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
  const [prompt, setPrompt] = useState(initialPrompt);
  const [showStyleModal, setShowStyleModal] = useState(false);

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

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setPrompt(prompt.trim());
    generateImage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleStyleChange = (newStyle) => {
    // Update the selected style and recreate prompt
    setSelectedStyle(newStyle.id);
    setShowStyleModal(false);
    // Call recreatePrompt after a short delay to allow state update
    setTimeout(() => recreatePrompt(), 100);
  };

  const openStyleModal = () => {
    setShowStyleModal(true);
  };

  return (
    <div className="chat-room">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #2d1b4e 0%, #3d2f4a 50%, #4a3a38 100%);
          color: #ececec;
          overflow-x: hidden;
        }

        .chat-room {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #2d1b4e 0%, #3d2f4a 50%, #4a3a38 100%);
        }

        .header {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #ececec;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .logo {
          font-weight: 600;
          font-size: 14px;
          color: #ececec;
        }

        .close-btn {
          background: none;
          border: none;
          color: #ececec;
          font-size: 20px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .chat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .content-wrapper {
          width: 100%;
          max-width: 900px;
        }

        .chat-container {
          flex: 1;
          width: 100%;
          max-height: 600px;
          overflow-y: auto;
          margin-bottom: 32px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chat-message {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
        }

        .message-content {
          max-width: 80%;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .user-message .message-content {
          align-self: flex-end;
          background: rgba(102, 126, 234, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .ai-message .message-content {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.05);
        }

        .chat-image {
          width: 100%;
          max-width: 300px;
          height: auto;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .generated {
          border: 2px solid rgba(102, 126, 234, 0.5);
        }

        .message-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .prompt-box {
          background: rgba(0, 0, 0, 0.3);
          padding: 12px;
          border-radius: 8px;
          font-style: italic;
          margin-bottom: 12px;
        }

        .analysis-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .chip {
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.8);
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .gradient-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border-radius: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .download-image-btn {
          background: rgba(102, 126, 234, 0.8);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 12px;
          margin-top: 8px;
          transition: all 0.2s;
        }

        .download-image-btn:hover {
          background: rgba(102, 126, 234, 1);
        }

        .image-display {
          width: 100%;
          margin-bottom: 32px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .loading-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .image-caption {
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .caption-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .caption-text {
          color: #ececec;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .image-actions {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: #ececec;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .prompt-section {
          width: 100%;
          position: relative;
        }

        .prompt-input-wrapper {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          transition: all 0.3s;
          overflow: hidden;
        }

        .prompt-input-wrapper:focus-within {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .prompt-textarea {
          width: 100%;
          min-height: 120px;
          padding: 20px;
          background: transparent;
          border: none;
          color: #ececec;
          font-size: 15px;
          font-family: inherit;
          line-height: 1.6;
          resize: none;
          outline: none;
        }

        .prompt-textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .input-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.2);
        }

        .voice-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .voice-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
        }

        .voice-btn svg {
          width: 20px;
          height: 20px;
        }

        .generate-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }

        .generate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.6);
        }

        .generate-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .generate-btn svg {
          width: 16px;
          height: 16px;
        }

        .chat-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          padding: 20px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 12px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.6);
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .action-btn.success {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(74, 222, 128, 0.4);
        }

        .action-btn.success:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(74, 222, 128, 0.6);
        }

        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .footer-note {
          text-align: center;
          margin-top: 24px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          max-width: 600px;
        }

        .footer-note a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
        }

        .footer-note a:hover {
          text-decoration: underline;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.4);
          gap: 16px;
          padding: 80px 20px;
        }

        .empty-state svg {
          width: 64px;
          height: 64px;
          opacity: 0.3;
        }

        .empty-state-text {
          font-size: 14px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .chat-content {
            padding: 20px 16px;
          }

          .content-wrapper {
            max-width: 100%;
          }

          .chat-actions {
            flex-direction: column;
            align-items: center;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          background: linear-gradient(135deg, #3d2f4a 0%, #4a3a38 100%);
          border-radius: 16px;
          padding: 24px;
          max-width: 400px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .modal-content h3 {
          color: #ececec;
          margin-bottom: 20px;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
        }

        .style-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .style-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .style-option:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .style-option.selected {
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.1);
        }

        .style-emoji {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .style-name {
          font-size: 12px;
          color: #ececec;
          font-weight: 500;
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          color: #ececec;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 480px) {
          .style-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-left">
          <div className="logo">Kundskapskontrollen</div>
          <button className="back-btn" onClick={onBackToHome || resetSession}>
            <ArrowLeft size={16} />
            Tillbaka
          </button>
        </div>
        <button className="close-btn">×</button>
      </header>

      <div className="chat-content">
        <div className="content-wrapper">
          {generatedImage || isGeneratingImage ? (
            <div className="image-display">
              <div className="image-container">
                {isGeneratingImage ? (
                  <div className="loading-state">
                    <div className="spinner"></div>
                    <div className="loading-text">Skapar bild...</div>
                  </div>
                ) : (
                  <img src={generatedImage} alt="Generated" />
                )}
              </div>
              {generatedImage && !isGeneratingImage && (
                <div className="image-caption">
                  <div className="caption-label">
                    Bilden har skapats • {selectedStyle?.name || 'Anpassad stil'}
                  </div>
                  <div className="caption-text">{generatedPrompt?.prompt || prompt}</div>
                  <div className="image-actions">
                    <button className="action-btn" onClick={downloadImage}>
                      <Download size={16} />
                      Ladda ner
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="chat-container" ref={chatScrollRef}>
              {/* Uploaded Image at Top */}
              {capturedImage && (
                <div className="chat-message user-message">
                  <div className="message-content">
                    <img src={capturedImage} alt="Uploaded" className="chat-image" />
                    <div className="message-label">
                      {useRecreateMode ? '🎨 Återskapa denna bild' : '💭 Generera prompt'}
                    </div>
                  </div>
                </div>
              )}

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
          )}

          <div className="prompt-section">
            <div className="prompt-input-wrapper">
              <textarea
                className="prompt-textarea"
                placeholder="Beskriv bilden du vill skapa..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <div className="input-footer">
                <button
                  className="generate-btn"
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGeneratingImage}
                >
                  <Sparkles />
                  Generera
                </button>
              </div>
            </div>
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
                  onClick={openStyleModal}
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
      </div>

      {/* Style Change Modal */}
      {showStyleModal && (
        <div className="modal-overlay" onClick={() => setShowStyleModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Välj en ny stil</h3>
            <div className="style-grid">
              {STYLE_PRESETS.slice(0, 5).map((style) => (
                <div
                  key={style.id}
                  className={`style-option ${selectedStyle?.id === style.id ? 'selected' : ''}`}
                  onClick={() => handleStyleChange(style)}
                >
                  <div className="style-emoji">{style.emoji}</div>
                  <div className="style-name">{style.name}</div>
                </div>
              ))}
            </div>
            <button className="modal-close" onClick={() => setShowStyleModal(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
