import { STYLE_PRESETS } from '../config'
import { useState, useRef, useEffect } from 'react'

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
  setCarouselIndex
}) {
  const ITEMS_PER_PAGE = 5
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

  return (
    <>
      <header className="header">
        <div className="search-bar" onClick={() => fileInputRef.current.click()}>
          <button className="image-upload-icon" onClick={() => fileInputRef.current.click()}>
            🖼️
          </button>
          <input type="text" placeholder="Beskriv en ny bild" readOnly />
          <button className="voice-btn" onClick={(e) => { e.stopPropagation(); }}>🎤</button>
        </div>
      </header>

      <main className="main-content">
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

        {/* Style Carousel */}
        <section className="section">
          <div className="section-header">
            <h2>Prova en stil på en bild</h2>
            <div className="carousel-nav">
              <button className="carousel-btn" onClick={prevSlide}>←</button>
              <span className="carousel-indicator">{carouselIndex + 1} / {totalPages}</span>
              <button className="carousel-btn" onClick={nextSlide}>→</button>
            </div>
          </div>
          <div 
            ref={carouselRef}
            className="style-carousel-wrapper"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ 
              cursor: dragStart !== null ? 'grabbing' : 'grab',
              userSelect: 'none'
            }}
          >
            <div className="style-carousel-track">
              {STYLE_PRESETS.map((style, index) => (
                <button
                  key={style.id}
                  className={`style-card-carousel ${selectedStyle === style.id ? 'selected' : ''} ${
                    Math.floor(index / ITEMS_PER_PAGE) === carouselIndex ? 'visible' : ''
                  }`}
                  onClick={() => handleStyleClick(style.id)}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <div className="style-preview-large">{style.emoji}</div>
                  <span className="style-name">{style.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Prompts */}
        {recentPrompts.length > 0 && (
          <section className="section">
            <div className="section-header">
              <h2>Hitta något nytt</h2>
            </div>
            <div className="recent-grid">
              {recentPrompts.slice(0, 6).map((prompt, index) => (
                <button
                  key={prompt.id || index}
                  className="recent-card"
                  onClick={() => useRecentPrompt(prompt)}
                >
                  <div className="recent-thumbnail">💭</div>
                  <span className="recent-title">{prompt.prompt.substring(0, 35)}...</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Mode Toggle */}
        <section className="mode-section">
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
        </section>

        {/* Camera Button */}
        <section className="camera-section">
          <button className="camera-btn" onClick={() => cameraInputRef.current.click()}>
            📷 Ta ett foto
          </button>
        </section>
      </main>
    </>
  )
}
