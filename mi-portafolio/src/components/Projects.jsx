import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Backend',
      description: 'API RESTful para plataforma de comercio electrónico con microservicios, manejo de inventario y pasarela de pagos integrada.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Sistema de Gestión Hospitalaria',
      description: 'Sistema completo para gestión de pacientes, citas médicas y historiales clínicos con rol-based access control.',
      technologies: ['Python', 'Django', 'MongoDB', 'React', 'AWS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Dashboard de análisis en tiempo real con WebSockets para visualización de datos y métricas de negocio.',
      technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Chart.js', 'React'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-number">
                <span>0{index + 1}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Código
                  </a>
                  <a href={project.demo} className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <button className="btn btn-outline">Ver Todos los Proyectos</button>
        </div>
      </div>
    </section>
  )
}

export default Projects