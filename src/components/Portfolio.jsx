import React from "react";
import "./Portfolio.css";
import JobCard from "./JobCard";
import ResumeCard from "./ResumeCard";
import ProyectCard from "./ProyectCard";
import EducationCard from "./EducationCard";

export default function Portfolio() {
  return (
    <div className="portfolio-container color-change-2x">
      <div className="portfolio-wrapper">
        <aside className="sidebar">
          <h3 className="profile-name">FERNANDO OSCAR CLEMENS</h3>
          <p className="profile-role">Desarrollador Web</p>

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
              <ResumeCard />
            </section>
            <section>
              <h2>Educación</h2>
              <EducationCard />
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
                Proyectos personales y colaborativos realizados durante mi
                formación.
              </p>
              <ProyectCard
                title="Awesome Color Scheme Picker - Aplicación generadora de esquemas de color."
                description="Generadora de esquemas de color."
                technologies="HTML, CSS, javascript"
                repoLink="https://github.com/Ferclemens/color-scheme-generator"
                demoLink="https://awesome-color-scheme-picker.netlify.app/"
                img_src="/awesomecolorschemepicker.png"
              />
              <ProyectCard
                title="Rememba App - Aplicación de recordatorios."
                description="To-do list app para crear y gestionar recordatorios. Con información persistente en browser."
                technologies="HTML, CSS, javascript"
                repoLink="https://github.com/Ferclemens/RemembaApp"
                demoLink="https://rememba-app.netlify.app/"
                img_src="/remembaapp.png"
              />
              <ProyectCard
                title="Tables and Charts App - Aplicación de tablas y gráficos."
                description="Una aplicación para cargar un archivo xlsx de ventas y mostrar información gráfica sobre esos datos."
                technologies="React, React-Table, Chart.js, Chakra UI"
                repoLink="https://github.com/Ferclemens/tables-and-charts"
                demoLink="https://tables-and-charts-app.vercel.app/"
                img_src="/tablesandcharts.png"
              />
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
