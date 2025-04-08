import Head from 'next/head';
import { CheckCircle } from 'lucide-react';
import './HowItWorks.css'; // Import the custom CSS

const steps = [
  {
    title: 'Step 1: Quick Sign-Up',
    desc: 'Fill out a short form to tell us about your child — their age, interests, and schedule.',
  },
  {
    title: 'Step 2: Meet Your Instructor',
    desc: 'We’ll match you with a friendly, vetted tech mentor who fits your child’s needs.',
  },
  {
    title: 'Step 3: Personalized Curriculum',
    desc: 'We design a customized learning journey using fun projects and real-world challenges.',
  },
  {
    title: 'Step 4: Weekly In-Home Sessions',
    desc: 'Your instructor visits weekly or connects virtually for a hands-on learning experience.',
  },
  {
    title: 'Step 5: Watch Them Bloom',
    desc: 'You’ll get progress reports, project showcases, and a front-row seat to your child’s growth.',
  },
];

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works | NeoMinds</title>
      </Head>
      <section className="how-it-works-section">
        <h1 className="how-it-works-title">🧠 How TechBloom Works</h1>
        <div className="steps-container">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <CheckCircle className="check-icon" />
              <div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
