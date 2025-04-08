import Head from "next/head";
import Hero from "../components/Hero";
import Programs from "../components/programs";
import Testimonials from "../components/Testimonials";
import HowItWorks from "./how-it-works";
import Contact from "./Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>NeoMinds | TechBloom</title>
      </Head>
      <main>
        <Hero />
        <About />
        <Programs />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
