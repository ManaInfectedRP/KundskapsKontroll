import { STYLE_PRESETS } from '../config'
import { useState, useRef, useEffect } from 'react'
import { Image, ChevronLeft, ChevronRight, Mic, Upload, Camera } from 'lucide-react'

export default function HomeScreen({
  selectedStyle,
  setSelectedStyle,
  recentPrompts,
  useRecentPrompt,
  useRecreateMode,
  setUseRecreateMode,
  fileInputRef,
  cameraInputRef,
  handleImageUpload,
  carouselIndex,
  setCarouselIndex,
  handlePromptSubmit
}) {
  const [promptText, setPromptText] = useState("");
  const ITEMS_PER_PAGE = 100
  const totalPages = Math.ceil(STYLE_PRESETS.length / ITEMS_PER_PAGE)

  const carouselRef = useRef(null)
  const [dragStart, setDragStart] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselIndex * carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }, [carouselIndex])

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleMouseDown = (e) => {
    setDragStart(e.clientX)
    setIsDragging(false)
    setDragOffset(0)
  }

  const handleMouseMove = (e) => {
    if (dragStart !== null && carouselRef.current) {
      const diff = e.clientX - dragStart
      setDragOffset(diff)

      if (Math.abs(diff) > 10) {
        setIsDragging(true)
      }

      // Update scroll position smoothly
      const scrollAmount = carouselIndex * carouselRef.current.offsetWidth - diff
      carouselRef.current.scrollLeft = scrollAmount
    }
  }

  const handleMouseUp = (e) => {
    if (dragStart !== null) {
      const diff = e.clientX - dragStart

      // Threshold for changing slides
      if (Math.abs(diff) > 100) {
        if (diff < 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      } else {
        // Snap back to current position
        if (carouselRef.current) {
          const scrollAmount = carouselIndex * carouselRef.current.offsetWidth
          carouselRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          })
        }
      }

      setDragStart(null)
      setDragOffset(0)
      setTimeout(() => setIsDragging(false), 100)
    }
  }

  const handleStyleClick = (styleId) => {
    if (!isDragging) {
      setSelectedStyle(styleId)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    const prompt = recentPrompts.find(p => p.id === suggestion.id || p.prompt === suggestion.text.replace('...', ''));
    if (prompt) {
      useRecentPrompt(prompt);
      setPromptText(prompt.prompt);
      handlePromptSubmit(prompt.prompt);
    } else {
      setPromptText(suggestion.text);
      handlePromptSubmit(suggestion.text);
    }
  };

  return (
    <div className="home-screen">
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

        .home-screen {
          min-height: 100vh;
          width: 80%;
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
          gap: 8px;
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

        .home-content {
          flex: 1;
          padding: 60px 40px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .home-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 32px;
          text-align: center;
        }

        .search-bar {
          max-width: 800px;
          margin: 0 auto 60px;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 32px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s;
        }

        .search-bar:focus-within {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .search-icon {
          width: 20px;
          height: 20px;
          opacity: 0.5;
        }

        .search-input {
          flex: 1;
          background: none;
          border: none;
          color: #ececec;
          font-size: 15px;
          outline: none;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .search-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .search-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .search-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
        }

        .upload-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .upload-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .section {
          margin-bottom: 60px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 20px;
          font-weight: 600;
        }

        .section-nav {
          display: flex;
          gap: 8px;
        }

        .nav-btn {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #ececec;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .styles-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          padding: 40px 0;
        }

        .style-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
          opacity: ${isDragging ? 0.7 : 1};
          flex-shrink: 0;
          width: 180px;
        }

        .style-card.ghost {
          opacity: 0.3;
          transform: scale(0.85);
        }

        .style-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .style-card.selected {
          border-color: #667eea;
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
        }

        .style-preview {
          width: 100%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          background: rgba(255, 255, 255, 0.05);
        }

        .style-name {
          padding: 12px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
        }

        .suggestions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .suggestion-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .suggestion-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .suggestion-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .suggestion-text {
          font-size: 14px;
          font-weight: 500;
        }

        .mode-section {
          margin-bottom: 60px;
        }

        .mode-toggle {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 4px;
          max-width: 400px;
          margin: 0 auto;
        }

        .mode-btn {
          flex: 1;
          padding: 12px 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .mode-btn.active {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
        }

        .mode-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ececec;
        }

        .camera-section {
          text-align: center;
        }

        .camera-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }

        .camera-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.6);
        }

        @media (max-width: 768px) {
          .home-title {
            font-size: 28px;
          }

          .styles-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }

          .suggestions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-left">
          <div className="logo">Kundskapskontrollen</div>
        </div>
      </header>

      <div className="home-content">
        <h1 className="home-title">Bilder</h1>

        <div className="search-bar">
          <button className="upload-btn" onClick={() => fileInputRef.current.click()}>
            <Upload size={20} />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Beskriv en ny bild"
            value={promptText}
            onChange={e => setPromptText(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && promptText.trim()) {
                handlePromptSubmit(promptText)
                setPromptText("")
              }
            }}
          />
          <div className="search-actions">
            <button className="search-btn" onClick={() => cameraInputRef.current.click()}>
              <Camera size={20} />
            </button>
          </div>
        </div>

        {/* Hidden file inputs */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <input
          type="file"
          ref={cameraInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          capture="environment"
          style={{ display: 'none' }}
        />

        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Prova en stil på en bild</h2>
            <div className="section-nav">
              <button className="nav-btn" onClick={prevSlide}>
                <ChevronLeft size={20} />
              </button>
              <button className="nav-btn" onClick={nextSlide}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div
            ref={carouselRef}
            className="styles-grid"
            style={{
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            {(() => {
              const selectedIndex = STYLE_PRESETS.findIndex(s => s.id === selectedStyle);
              const prevIndex = (selectedIndex - 1 + STYLE_PRESETS.length) % STYLE_PRESETS.length;
              const nextIndex = (selectedIndex + 1) % STYLE_PRESETS.length;
              
              return (
                <>
                  <div
                    className="style-card ghost"
                    onClick={() => handleStyleClick(STYLE_PRESETS[prevIndex].id)}
                  >
                    <div className="style-preview">{STYLE_PRESETS[prevIndex].emoji}</div>
                    <div className="style-name">{STYLE_PRESETS[prevIndex].name}</div>
                  </div>
                  
                  <div
                    className="style-card selected"
                    onClick={() => handleStyleClick(STYLE_PRESETS[selectedIndex].id)}
                  >
                    <div className="style-preview">{STYLE_PRESETS[selectedIndex].emoji}</div>
                    <div className="style-name">{STYLE_PRESETS[selectedIndex].name}</div>
                  </div>
                  
                  <div
                    className="style-card ghost"
                    onClick={() => handleStyleClick(STYLE_PRESETS[nextIndex].id)}
                  >
                    <div className="style-preview">{STYLE_PRESETS[nextIndex].emoji}</div>
                    <div className="style-name">{STYLE_PRESETS[nextIndex].name}</div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        <div className="mode-section">
          <div className="mode-toggle">
            <button
              className={`mode-btn ${useRecreateMode ? 'active' : ''}`}
              onClick={() => setUseRecreateMode(true)}
            >
              🎨 Återskapa Bild
            </button>
            <button
              className={`mode-btn ${!useRecreateMode ? 'active' : ''}`}
              onClick={() => setUseRecreateMode(false)}
            >
              💭 Generera Prompt
            </button>
          </div>
        </div>

        <div className="camera-section">
          <button className="camera-btn" onClick={() => cameraInputRef.current.click()}>
            <Camera size={20} />
            Ta ett foto
          </button>
        </div>
      </div>
    </div>
  );
}
