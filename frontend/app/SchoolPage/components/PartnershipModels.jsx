"use client";

import React from "react";
import "./PartnershipModels.css";

const models = [
  {
    title: "After-School Tech Club",
    desc: "A fun and enriching program where students dive into coding, design, and innovation after their regular school hours.",
  },
  {
    title: "Weekend Coding Bootcamp",
    desc: "Intensive weekend sessions tailored to fast-track students’ skills in coding, game development, and more.",
  },
  {
    title: "Elective Subject Integration",
    desc: "Seamlessly incorporate tech education into your school’s academic timetable as an elective subject.",
  },
  {
    title: "Holiday Tech Camps",
    desc: "Engaging and productive holiday programs focused on building real-world digital skills in a playful format.",
  },
  {
    title: "Workshops & Event Presentations",
    desc: "One-off or recurring interactive workshops and tech talks that inspire and empower your students.",
  },
];

const PartnershipModels = () => (
  <section className="partnership-section">
    <div className="container">
      <h2 className="title">🤝 How We Work With Schools</h2>
      <p className="subtitle">
        Flexible models tailored to fit your school’s structure and student needs.
      </p>

      <div className="model-grid">
        {models.map((model, i) => (
          <div className="model-card" key={i}>
            <div className="icon">🎓</div>
            <h3>{model.title}</h3>
            <p>{model.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnershipModels;
