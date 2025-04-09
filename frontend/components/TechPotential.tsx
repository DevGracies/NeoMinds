// frontend/pages/tech-potential.tsx

"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import "./TechPotential.css"; // Make sure this file exists

export default function TechPotential() {
  return (
    <>
      <Head>
        <title>Is Your Child a Hidden Tech Genius? | NeoMinds</title>
      </Head>

      <section className="tech-section">
        <div className="tech-header">
          <motion.h1
            className="tech-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🌱 Is Your Child Secretly a Tech Genius?
          </motion.h1>
          <p className="tech-subtitle">
            At NeoMinds, we believe tech talent comes in many forms — even the unexpected ones.
          </p>
        </div>

        <div className="tech-grid">
          <motion.div
            className="tech-box tech-box-blue"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="tech-box-title">
              💡 Look beyond grades and gadgets — here’s how to spot it.
            </h2>
            <ul className="tech-list">
              {[
                ['🧩 The Curious Explorer', 'Always asking “why?” or taking things apart just to see how they work.'],
                ['🎮 The Gamer', 'Spends hours playing, but also talks about how games are built or improved.'],
                ['🤫 The Quiet Thinker', 'Loves puzzles, patterns, and tech toys. Logical and focused.'],
                ['🔧 The Inventor', 'Combines tools and imagination to build new ideas.'],
                ['🎨 The Creative Designer', 'Draws, animates, or builds digital worlds with flair.'],
                ['🛠️ The Tinkerer', 'Hacks devices without even realizing it.'],
                ['💁🏽 The Helper', 'The go-to tech support at home, loves explaining things.'],
              ].map(([title, desc], idx) => (
                <li key={idx}>
                  <p className="tech-list-title">{title}</p>
                  <p className="tech-list-desc">{desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="tech-box tech-box-green"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="tech-box-title">🙃 “Bad” Traits That Might Mean They’re Brilliant</h2>
            <table className="tech-table">
              <thead>
                <tr>
                  <th>Trait</th>
                  <th>What It *Really* Means</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['🗣️ Talks too much', 'Natural communicator or team leader'],
                  ['😤 Stubborn', 'Strong logic and independence'],
                  ['😴 Bored in class', 'Needs a challenge — tech brings the spark'],
                  ['📱 Always on devices', 'Might be learning, exploring, or creating'],
                  ['🤯 Disorganized', 'Creative ideas waiting to be channeled'],
                  ['🚫 Breaks rules', 'Thinks outside the box — hacker mindset'],
                ].map(([trait, meaning], i) => (
                  <tr key={i}>
                    <td>{trait}</td>
                    <td>{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        <motion.div
          className="tech-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="tech-cta-title">🌟 Every child is unique — we help them bloom.</h2>
          <p className="tech-cta-text">
            Whether your child is a gamer, artist, builder, or quiet thinker, NeoMinds is designed to unlock their creative tech potential.
          </p>
          <a href="/enroll" className="tech-cta-btn">
            👉 Enroll Your Child Today
          </a>
        </motion.div>
      </section>
    </>
  );
}
