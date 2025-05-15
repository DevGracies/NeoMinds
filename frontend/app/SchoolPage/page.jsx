"use client";

import React from "react";
import "./school.css";
import { useRouter } from "next/navigation";
import SchoolPartnership from "./SchoolPartnership";
import { FaAngleLeft } from "react-icons/fa";
import Image from "next/image";

const SchoolPage = () => {
  const router = useRouter();

  return (
    <div className="school-page">
      <div className="back-button" onClick={() => router.push("/")}>
        <FaAngleLeft /> Go Back
      </div>

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>Partner with NeoMinds</h1>
            <p className="tagline">
              Future-Ready Tech Education for Curious Young Minds
            </p>
            <p className="description">
              Equip your students with the digital skills that matter most.
              NeoMinds delivers hands-on, engaging, and age-appropriate tech
              programs directly into your school — sparking creativity,
              problem-solving, and global relevance.
            </p>
          </div>
          <div className="hero-image">
            <Image
              src="/school.jpg"
              width={600}
              height={400}
              alt="Students learning tech together"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <SchoolPartnership />
    </div>
  );
};

export default SchoolPage;
