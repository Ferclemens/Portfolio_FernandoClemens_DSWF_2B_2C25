import React from "react";
import "./Portfolio.css";

export default function JobCard({ title, company, period, items }) {
  return (
    <article className="job-card">
      <div className="job-header">
        <div>
          <h3 className="job-title">{title}</h3>
          <p className="job-company">{company}</p>
        </div>
        <span className="job-period">{period}</span>
      </div>
      <ul className="job-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
