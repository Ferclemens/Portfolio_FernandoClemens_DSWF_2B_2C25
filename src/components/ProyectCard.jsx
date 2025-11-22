import React from "react";

function ProyectCard({
  title,
  description,
  technologies,
  repoLink,
  demoLink,
  img_src,
}) {
  return (
    <div className="projects-grid">
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{technologies}</p>
        <a href={repoLink} target="_blank">
          {repoLink}
        </a>
        <br></br>
        <a href={demoLink} target="_blank">
          {demoLink}
        </a>
        <img className="project-img" src={img_src} alt="Proyecto imagen" />
      </div>
    </div>
  );
}

export default ProyectCard;
