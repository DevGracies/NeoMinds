import Head from "next/head";
import "./Testimonials.css"; // Import the custom CSS

const testimonials = [
  {
    name: "Amina B. (Parent of 9-year-old)",
    quote:
      "TechBloom turned my shy child into a confident little coder! The lessons are fun and the instructor is wonderful.",
  },
  {
    name: "Jason K. (Dad of 13-year-old)",
    quote:
      "I was blown away by how engaged my son is. He’s building websites now and even teaching *me*!",
  },
  {
    name: "Sophia T. (14 y/o Student)",
    quote:
      "I always wanted to build games. Now I am building one and it’s actually working!",
  },
];

const faqs = [
  {
    q: "Do you offer online classes?",
    a: "Yes! While we focus on in-home instruction, virtual sessions are available upon request.",
  },
  {
    q: "Are your instructors background-checked?",
    a: "Absolutely. Every educator is vetted and trained both in tech and working with children.",
  },
  {
    q: "What does a typical session look like?",
    a: "It’s a blend of interactive learning, building cool projects, and exploring your child’s curiosity at their pace.",
  },
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonials | NeoMinds</title>
      </Head>
      <section className="testimonials-section">
        <h1 className="testimonials-title">🌟 What Parents & Kids Say</h1>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-quote">“{t.quote}”</p>
              <p className="testimonial-author">— {t.name}</p>
            </div>
          ))}
        </div>

          
        <h2 className="faqs-title">🤔 Frequently Asked Questions</h2>
        <div className="faqs-container">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-card">
              <h3 className="faq-question">{faq.q}</h3>
              <p className="faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
