import Head from 'next/head';
import  "./About.css"

const taglines = [
  'Shaping brilliant minds for a digital tomorrow.',
  'The new mind starts here.',
  'Innovative learning for the next-gen coder.',
  'Empowering kids with future-proof skills.',
  'Where young minds grow through code.',
  'Planting seeds of innovation in every child.',
  'Watch your child bloom in tech.',
  'Turning curiosity into code.',
];

export default function About() {
  return (
    <>
      <Head><title>About Us | NeoMinds</title></Head>
      <section className= "section">
        <div className= "center">
          <h1 className= "title">🌱 About NeoMinds</h1>
          <p className= "introText">
            NeoMinds is the future-forward organization shaping the next generation of tech thinkers.
            Through <span className= "greenText">TechBloom</span>, we nurture curiosity, creativity,
            and digital confidence with personalized, in-home tech education for children.
          </p>
        </div>

        <div className= "taglineGrid">
          {taglines.map((t, i) => (
            <div key={i} className= "taglineCard">
              <p className= "taglineText">“{t}”</p>
            </div>
          ))}
        </div>

        <div className= "essenceSection">
          <h2 className= "essenceTitle">🌸 TechBloom – A NeoMinds Initiative</h2>
          <p className= "essenceQuote">“Where young minds grow through code.”</p>
          <p className= "essenceDesc">
            TechBloom delivers personalized, hands-on lessons in coding, mobile, and web development — all from the comfort of home.
            We believe every child holds the seed of a brilliant idea. We help them grow it.
          </p>
        </div>

        <div className= "missionVision">
          <div className= "card">
            <h3 className= "cardTitle">🎯 Our Mission</h3>
            <p className= "cardText">
              To make tech literacy accessible, engaging, and fun for children—right from their homes. We introduce mobile/web development,
              programming, and real-world problem solving.
            </p>
          </div>
          <div className= "card">
            <h3 className= "cardTitle">🌟 Our Vision</h3>
            <p className= "cardText">
              To raise a new generation of creators, innovators, and digital leaders — one child, one lesson at a time.
            </p>
          </div>
        </div>

        <div className= "different">
          <h2 className= "differentTitle">🔥 What Makes Us Different?</h2>
          <div className= "differentGrid">
            <div className={`${"featureCard"} ${"blueBorder"}`}>
              <h4 className={`${"featureTitle"} ${"blueText"}`}>💻 Personalized In-Home Lessons</h4>
              <p className= "featureText">Every child learns differently. We tailor every lesson to suit their pace and interests in the comfort of their home.</p>
            </div>
            <div className={`${"featureCard"} ${"greenBorder"}`}>
              <h4 className={`${"featureTitle"} ${"greenText"}`}>🌱 Growth-Centered Curriculum</h4>
              <p className= "featureText">We don’t just teach code — we nurture creativity, problem-solving, and tech confidence.</p>
            </div>
            <div className={`${"featureCard"} ${"purpleBorder"}`}>
              <h4 className={`${"featureTitle"} $ "purpleText"}`}>🧑‍🏫 Passionate Educators</h4>
              <p className="featureText">Trained in tech *and* child engagement, our educators make learning fun and inspiring.</p>
            </div>
            <div className={`${"featureCard"} ${"redBorder"}`}>
              <h4 className={`${"featureTitle"} ${"redText"}`}>🛡️ Trust & Safety First</h4>
              <p className="featureText">We operate with transparency and professionalism, keeping parents informed and kids safe.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
