import Head from "next/head";
import Testimonials from "../components/Testimonials";
import HowItWorks from "./how-it-works";
import Contact from "./Contact";
import TechPotential from "@/components/TechPotential";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>NeoMinds | TechBloom</title>
      </Head>
      <main>
        <section className="first-section">
          <div className="first-grid">
            <div className="first-text">
              <h3>
                Unlock Your Child’s Tech Potential — One Brilliant Mind at a
                Time
              </h3>
              <p className="line">
                At NeoMinds, we nurture creativity, confidence, and future-ready
                skills through personalized tech education designed for curious
                kids and teenagers.
              </p>
              <p className="description">
                More than just coding — we cultivate critical thinking,
                problem-solving, and lifelong learning with passionate mentors
                who inspire and empower every child’s unique journey. At
                NeoMinds, we believe every child carries a spark of genius
                waiting to be ignited. Our dedicated mentors don’t just teach
                tech—they inspire courage, creativity, and confidence to help
                your child dream bigger, think deeper, and build a future
                without limits.
              </p>
            </div>
            <div className="first-image">
              <Image
                src="/glass.jpg"
                width={600}
                height={400}
                alt="Students learning tech together"
                className="first-img"
              />
            </div>
          </div>
        </section>
        <TechPotential />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
