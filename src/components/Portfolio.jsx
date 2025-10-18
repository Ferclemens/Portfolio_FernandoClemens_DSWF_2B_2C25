import React from "react";
import "./Portfolio.css";
import JobCard from "./JobCard";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <aside className="sidebar">
          <div className="profile">
            <img
              src="/assets/perfil_cv.webp"
              alt="Foto de perfil - Fernando Clemens"
              className="profile-image"
            />
            <h3 className="profile-name">FERNANDO OSCAR CLEMENS</h3>
            <p className="profile-role">Desarrollador Web</p>
          </div>

          <nav className="contact-section">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="mailto:foclemens@gmail.com">foclemens@gmail.com</a>
              </li>
              <li>+54 9 3624 685267</li>
              <li>Resistencia, Chaco, Argentina</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/foclemens/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/foclemens
                </a>
              </li>
            </ul>
          </nav>

          <section className="skills-section">
            <h4>Skills</h4>
            <ul>
              {[
                "HTML5",
                "CSS",
                "JavaScript (ES6+)",
                "Python",
                "React",
                "Node.js",
                "Express.js",
                "Cypress",
                "Git y GitHub",
                "Scrum/Kanban",
                "REST API",
                "Responsable",
              ].map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </section>

          <section className="languages-section">
            <h4>Idiomas</h4>
            <ul>
              <li>Español — Nativo</li>
              <li>Inglés — B1</li>
            </ul>
          </section>

          <section className="softskills-section">
            <h4>Soft skills</h4>
            <ul>
              {[
                "Aprendizaje rápido",
                "Atención al detalle",
                "Flexible",
                "Resolutivo",
                "Colaborativo",
                "Responsable",
              ].map((ss) => (
                <li key={ss}>• {ss}</li>
              ))}
            </ul>
          </section>
        </aside>

        <main className="main-content">
          <section className="intro-section">
            <header className="intro-header">
              <div>
                <h1>FERNANDO OSCAR CLEMENS</h1>
                <p className="subtitle">Desarrollador Web</p>
              </div>
              <span className="portfolio-label">Currículum / Portfolio</span>
            </header>

            <hr />

            <section>
              <h2>Resumen</h2>
              <p>
                Desarrollador web | Ing. de datos junior. Experiencia de trabajo
                en equipos y gestión de proyectos mediante metodologías ágiles.
                Elaboración de procesos ETL para manipulación de datos. Tester
                manual, desarrollo de casos de prueba y reportes de errores.
                Actualmente cursando tecnicatura en desarrollo de software.
                Proactivo, responsable y empático. Siempre dispuesto a colaborar
                en equipos de trabajo y aplicar lo aprendido. En continuo
                crecimiento.
              </p>
            </section>

            <section>
              <h2>Experiencia</h2>

              <JobCard
                title="Informatorio"
                company="Bootcamp"
                period="Marzo - Junio 2023"
                items={[
                  "Bootcamp de la Subsecretaria de Empleo del Chaco sobre backend con Java y testing.",
                  "Trabajo en equipo con metodologías ágiles (Scrum, Kanban).",
                  "Desarrollo de una API RESTful con Java Spring Boot.",
                  "Exploración manual de webs.",
                  "Elaboración de historias de usuario, casos de prueba y reporte de errores.",
                ]}
              />

              <JobCard
                title="Desarrollador web independiente"
                company="Independiente"
                period="Junio - Diciembre 2024"
                items={[
                  "Mantenimiento y desarrollo de páginas web responsivas y dinámicas.",
                  "Mantenimiento y desarrollo de bases de datos.",
                  "Administración y configuración de dominios.",
                  "Exploración de webs y reporte de errores y/o mejoras.",
                ]}
              />

              <JobCard
                title="Ingeniero de datos"
                company="ASJ Servicios"
                period="Enero 2025 - actualidad"
                items={[
                  "Desarrollo y mantenimiento de pipelines de datos utilizando Python y SQL.",
                  "Análisis y transformación de grandes conjuntos de datos para mejorar calidad y accesibilidad.",
                  "Monitoreo de flujos de datos para garantizar disponibilidad en tiempo y forma.",
                  "Colaboración con equipos multifuncionales para optimizar procesos de datos y apoyar iniciativas de negocio.",
                ]}
              />
            </section>

            <section>
              <h2>Proyectos destacados</h2>
              <p>
                (Aquí puedes listar proyectos, repositorios o enlaces a demos.
                Ej: proyecto personal, API, web responsive, tests con Cypress,
                etc.)
              </p>

              <div className="projects-grid">
                <div className="project-card">
                  <h3>Proyecto A</h3>
                  <p>
                    Descripción corta del proyecto, tecnologías y enlace a
                    repo/demo.
                  </p>
                </div>
                <div className="project-card">
                  <h3>Proyecto B</h3>
                  <p>
                    Descripción corta del proyecto, tecnologías y enlace a
                    repo/demo.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Educación</h2>
              <p>
                Tecnicatura en Desarrollo de Software — IFTS Nº 29 (1º PFO de
                Desarrollo Front End)
              </p>
            </section>
          </section>
        </main>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Fernando Oscar Clemens
      </footer>
    </div>
  );
}
