"use client";

import React, { useState } from "react";
import "./CurriculumTabs.css";

const tracks = {
  Beginner: {
    title: "Beginner Track",
    desc: "Lays the perfect foundation with friendly introductions to computers and the web.",
    topics: [
      "Intro to Computers & Internet",
      "Visual Programming with Scratch",
      "Web Development (HTML, CSS, JavaScript)",
    ],
  },
  Intermediate: {
    title: "Intermediate Track",
    desc: "Deepens skills with real-world programming and creative project building.",
    topics: [
      "Frontend & Backend Web Development",
      "Game Development (2D/3D)",
      "Mobile App Development (React Native)",
    ],
  },
  Advanced: {
    title: "Advanced Track",
    desc: "Prepares students for cutting-edge technologies and entrepreneurial thinking.",
    topics: [
      "AI, Robotics & Cybersecurity",
      "Blockchain, AR/VR & Cloud Computing",
      "UI/UX Design & Tech Entrepreneurship",
    ],
  },
};

const CurriculumTabs = () => {
  const [active, setActive] = useState("Beginner");

  return (
    <section className="curriculum-tabs">
      <h2 className="section-title">📚 Our Curriculum Tracks</h2>
      <p className="section-subtitle">
        Designed to grow with your students — from curious beginners to confident innovators.
      </p>

      <div className="tabs-container">
        {Object.keys(tracks).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`tab-btn ${active === key ? "active" : ""}`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="tab-panel">
        <h3 className="track-title">{tracks[active].title}</h3>
        <p className="track-desc">{tracks[active].desc}</p>
        <ul className="track-list">
          {tracks[active].topics.map((item, index) => (
            <li key={index} className="track-item">
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CurriculumTabs;
