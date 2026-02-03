import React, { useState, useEffect } from 'react'
import './Hero.css'
import meImage from '../assets/me.jpeg'
import alienIcon from '../assets/alien.png'

const Hero = () => {
  const [displayedTexts, setDisplayedTexts] = useState([])
  const [currentSection, setCurrentSection] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showButton, setShowButton] = useState(false)
  
  const sections = [
    { text: "Hola, soy jagch", delay: 20, type: 'title' },
    { text: "Soy desarrollador full-stack con especialización en backend.", delay: 10, type: 'main' },
    { text: "Ayudo a empresas y proyectos a construir sistemas confiables, seguros y preparados para crecer.", delay: 8, type: 'main' },
    { text: "Desarrollo APIs, manejo bases de datos y realizo integraciones sólidas con el frontend. También creo páginas web modernas, claras y orientadas a objetivos.", delay: 8, type: 'secondary' },
    { text: "Me enfoco en soluciones mantenibles y alineadas al negocio.", delay: 10, type: 'focus' },
    { text: "Menos improvisación. Más arquitectura.", delay: 15, type: 'tagline' }
  ]
  
  const [showImage, setShowImage] = useState(false)
  
  useEffect(() => {
    const current = sections[currentSection]
    
    if (isTyping) {
      const timer = setTimeout(() => {
        if (currentText.length < current.text.length) {
          setCurrentText(current.text.substring(0, currentText.length + 1))
        } else {
          // Guardar el texto completado
          setDisplayedTexts([...displayedTexts, { text: current.text, type: current.type }])
          setCurrentText('')
          
          if (currentSection < sections.length - 1) {
            setCurrentSection(currentSection + 1)
          } else {
            setIsTyping(false)
            setShowButton(true)
            setShowImage(true)
          }
        }
      }, current.delay)
      return () => clearTimeout(timer)
    }
  }, [currentText, isTyping, currentSection, displayedTexts])
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/51952385414', '_blank')
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img 
            src={meImage} 
            alt="Jagch Profile" 
            className={`hero-image ${showImage ? 'show' : ''}`}
          />
          <div className={`hero-image-border ${showImage ? 'show' : ''}`}></div>
        </div>
        
        <div className="hero-text">
          <div className="typing-container">
            {/* Título */}
            <h1 className="hero-title">
              {displayedTexts.filter(t => t.type === 'title').map((item, index) => (
                <span key={index} className="greeting completed-text">
                  {item.text.replace('jagch', 'jagch')}
                  {item.text.includes('jagch') && <img src={alienIcon} alt="alien icon" className="alien-icon" />}
                </span>
              ))}
              {sections[0] && currentSection === 0 && (
                <span className="greeting">
                  {currentText.replace('jagch', 'jagch')}
                  {currentText.includes('jagch') && <img src={alienIcon} alt="alien icon" className="alien-icon" />}
                  <span className="cursor">_</span>
                </span>
              )}
            </h1>
            
            {/* Textos completados */}
            <div className="hero-description">
              {displayedTexts.map((item, index) => {
                if (item.type === 'title') return null
                
                const className = 
                  item.type === 'main' ? 'main-description completed-text' :
                  item.type === 'secondary' ? 'secondary-description completed-text' :
                  item.type === 'focus' ? 'focus-description completed-text' :
                  item.type === 'tagline' ? 'tagline completed-text' : ''
                
                return (
                  <p key={index} className={className}>
                    {item.text}
                  </p>
                )
              })}
              
              {/* Texto actual tipeándose */}
              {currentSection > 0 && (
                <>
                  {(() => {
                    const current = sections[currentSection]
                    const className = 
                      current.type === 'main' ? 'main-description' :
                      current.type === 'secondary' ? 'secondary-description' :
                      current.type === 'focus' ? 'focus-description' :
                      current.type === 'tagline' ? 'tagline' : ''
                    
                    return (
                      <p className={className}>
                        {currentText}
                        <span className="cursor">_</span>
                      </p>
                    )
                  })()}
                </>
              )}
            </div>
          </div>
          
          <div className="hero-buttons">
            {showButton && (
              <button className="btn btn-whatsapp show" onClick={handleWhatsAppClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contactar por WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero