import Head from "next/head";
import "./About.css";

const taglines = [
  "Every Child is a Blooming Mind.",
  "We don’t just teach tech—we build thinkers with heart.",
  "At NeoMinds, curiosity is celebrated.",
  "Shaping brilliant minds for a digital tomorrow.",
  "Innovative learning for the next-gen coder.",
  "Empowering kids with future-proof skills.",
  "Planting seeds of innovation in every child.",
  "Watch your child bloom in tech.",
  "Every child holds a seed of brilliance. We help them grow it."
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | NeoMinds</title>
      </Head>

      <section className="about-section">
        <div className="content-wrapper">
          {/* Hero */}
          <div className="hero">
            <h1 className="hero-title">🌱 About NeoMinds</h1>
            <p className="hero-subtitle">
              Nurturing young minds with future-ready tech skills.
            </p>
          </div>

          {/* Intro */}
          <div className="intro">
            <p>
              NeoMinds is a transformative tech education community dedicated to
              unlocking the full potential of children and teenagers. Every
              child has a unique spark — a spark that, when kindled with care,
              grows into confidence and innovation.
            </p>
            <p>
              Our personalized <span className="highlight">TechBloom</span>{" "}
              programs inspire curiosity, critical thinking, and creativity
              within a safe and joyful learning space. Whether you're a parent,
              a school, or a youth-focused organization, NeoMinds partners with
              you to grow the next generation of creators.
            </p>
            <p>
              With flexible options — from one-on-one sessions to
              classroom-based experiences — our passionate educators foster
              collaboration and hands-on learning. In-person or online, we bring
              compassionate guidance and fun into every code lesson.
            </p>
            <p>
              At NeoMinds, we cultivate lifelong learners ready to thrive in an
              ever-evolving world. Together, we bloom brilliance in every young
              mind.
            </p>
            <p>
              <span className="highlight"> Why We Started</span>
              Neominds began as a calling — a deep desire to ensure no child
              grows up feeling unseen, unheard, or unloved. Our founder’s own
              childhood experience taught her the importance of being
              intentional with young minds. Today, Neominds exists to create
              joyful, meaningful, and empowering experiences for every child.
            </p>
          </div>

          {/* Taglines */}
          <div className="taglines">
            {taglines.map((t, i) => (
              <div key={i} className="tagline-card">
                <p>“{t}”</p>
              </div>
            ))}
          </div>

          {/* TechBloom Initiative */}
          <div className="techbloom">
            <h2>🌸 TechBloom – our flagship program</h2>
            <p className="quote">“Where young minds grow through code.”</p>
            <p>
              TechBloom delivers personalized, hands-on lessons in coding,
              mobile, and web development — all from the comfort of home. We
              believe every child holds the seed of a brilliant idea. We help
              them grow it.
            </p>
            <p>
              NeoMinds serves children and teenagers aged 6 to 17 with
              personalized tech education and growth-based learning
            </p>
          </div>

          <section className="tutors-section">
            <div className="container">
              <h2 className="section-title">Our Tutors</h2>
              <p className="section-intro">
                At NeoMinds, our tutors are the heart of everything we do.
              </p>
              <p className="section-desc">
                Each tutor is carefully selected not only for their strong
                technical skills, but for their passion, patience, and ability
                to connect deeply with young minds. They are trained educators
                and mentors who understand that teaching kids goes far beyond
                explaining concepts — it’s about inspiring curiosity, building
                trust, and nurturing confidence.
              </p>

              <div className="qualities-grid">
                <div className="quality-card">
                  <h3>Tech-Savvy</h3>
                  <p>
                    Experts in coding, digital tools, and creative technologies
                    — ready to break complex ideas into fun, age-appropriate
                    lessons.
                  </p>
                </div>
                <div className="quality-card">
                  <h3>Child-Centered</h3>
                  <p>
                    Trained to teach with empathy, emotional intelligence, and
                    respect for each child’s unique learning style and pace.
                  </p>
                </div>
                <div className="quality-card">
                  <h3>Safety-Conscious</h3>
                  <p>
                    Thoroughly screened and committed to creating a safe,
                    respectful, and encouraging environment.
                  </p>
                </div>
                <div className="quality-card">
                  <h3>Engaging & Supportive</h3>
                  <p>
                    Sparking joy in learning through storytelling, real-world
                    projects, and positive reinforcement.
                  </p>
                </div>
              </div>

              <div className="closing-note">
                <p>
                  Most importantly, our tutors don’t just teach — they inspire.
                  They believe in the brilliance inside every child and are
                  passionate about helping them grow into confident, capable
                  creators of tomorrow.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <div className="mission-vision">
            <div className="mission-card">
              <h3>🎯 Our Mission</h3>
              <p>
                To make tech literacy accessible, engaging, and fun for
                children—right from their homes. We introduce mobile/web
                development, programming, and real-world problem solving.
              </p>
            </div>
            <div className="vision-card">
              <h3>🌟 Our Vision</h3>
              <p>
                To raise a generation of emotionally strong, tech-savvy creators
                across Africa — children who are confident, joyful, and prepared
                for the future..
              </p>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="difference">
            <h2>🔥 What Makes Us Different?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h4>💻 Personalized In-Home Lessons</h4>
                <p>
                  Every child learns differently. We tailor each session to
                  match their pace and passion.
                </p>
              </div>
              <div className="feature-card">
                <h4>🌱 Growth-Centered Curriculum</h4>
                <p>
                  We nurture more than code — we grow creativity, resilience,
                  and joy in learning.
                </p>
              </div>
              <div className="feature-card">
                <h4>🧑‍🏫 Passionate Educators</h4>
                <p>
                  Our mentors are not just tech-savvy; they're caring, creative,
                  and child-focused.
                </p>
              </div>
              <div className="feature-card">
                <h4>🛡️ Trust & Safety First</h4>
                <p>
                  We operate transparently, keeping parents informed and
                  learners protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
