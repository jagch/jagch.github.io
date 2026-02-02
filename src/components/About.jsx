import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    { name: 'Node.js', level: 90, category: 'backend' },
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'database' },
    { name: 'MongoDB', level: 75, category: 'database' },
    { name: 'React', level: 70, category: 'frontend' },
    { name: 'TypeScript', level: 75, category: 'frontend' },
    { name: 'Docker', level: 65, category: 'devops' },
    { name: 'AWS', level: 60, category: 'devops' }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Fullstack Developer con Especialización en Backend</h3>
            <p>
              Soy un desarrollador apasionado por crear soluciones backend robustas y escalables. 
              Mi experiencia se centra en el diseño de arquitecturas eficientes, optimización de bases 
              de datos y la implementación de APIs RESTful de alto rendimiento.
            </p>
            <p>
              Aunque mi especialidad es el backend, tengo sólidos conocimientos en frontend que me 
              permiten desarrollar aplicaciones completas y coherentes. Me enfoco en escribir código 
              limpio, mantenible y siguiendo las mejores prácticas de la industria.
            </p>
            
            <div className="experience">
              <div className="experience-item">
                <h4>5+ Años</h4>
                <p>Experiencia en Desarrollo</p>
              </div>
              <div className="experience-item">
                <h4>50+</h4>
                <p>Proyectos Completados</p>
              </div>
              <div className="experience-item">
                <h4>15+</h4>
                <p>Clientes Satisfechos</p>
              </div>
            </div>
          </div>
          
          <div className="skills">
            <h3>Habilidades Técnicas</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About