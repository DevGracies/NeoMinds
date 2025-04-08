"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

import "./Hero.css";
import { useState } from "react";

export default function Hero() {
  const [buttonColorIndex, setButtonColorIndex] = useState(0); // Start with the first color
  const colors = ['primary', 'secondary', 'danger', 'success', 'warning']; // Array of colors
  const router = useRouter();

  const handleClick = () => {
    setButtonColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    router.push('/enroll'); // Navigate to the enroll page
  };

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-title">NeoMinds 🌸</h1>
      <p className="hero-subtitle">The Future Starts with TechBloom</p>

      <button 
        className={`hero-button ${colors[buttonColorIndex]}`} 
        onClick={handleClick}
      >
        Enroll Your Child
      </button>
    </motion.section>
  );
}
