import Head from "next/head";
import "./Programs.css"; // Import the regular CSS

const programs = [
  {
    title: "MiniCoders (Ages 6–9)",
    desc: "Fun and visual coding with Scratch, Blockly & interactive games.",
    color: "pink-to-purple",
    emoji: "🧒🎨",
  },
  {
    title: "CodeStarters (Ages 10–13)",
    desc: "Intro to HTML, CSS, JavaScript & mobile logic building.",
    color: "blue-to-techBlue",
    emoji: "💡📱",
  },
  {
    title: "Junior Developers (Ages 14–16)",
    desc: "Hands-on mobile/web app creation using real-world tools.",
    color: "green-to-bloomGreen",
    emoji: "👨‍💻🚀",
  },
  {
    title: "Tech Explorers Track",
    desc: "Rotational design, storytelling, logic and creative coding classes.",
    color: "purple-to-bloomPurple",
    emoji: "🌐🎭",
  },
];

export default function Programs() {
  return (
    <>
      <Head>
        <title>Programs | NeoMinds</title>
      </Head>
      <section className="programs-section">
        <h1 className="programs-title">🌸 TechBloom Programs</h1>
        <div className="programs-grid">
          {programs.map((p, i) => (
            <div key={i} className={`program-card ${p.color}`}>
              <div className="program-emoji">{p.emoji}</div>
              <h3 className="program-title">{p.title}</h3>
              <p className="program-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
