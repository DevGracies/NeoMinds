"use client";

import Head from "next/head";
import Testimonials from "../components/Testimonials";
import HowItWorks from "./how-it-works";
import Contact from "./Contact";
import TechPotential from "@/components/TechPotential";
import Image from "next/image";
import { motion } from "framer-motion";
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
              <motion.h1
                className="tech-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Unlock Your Child’s Tech Potential
              </motion.h1>
              <p className="line">
                At NeoMinds, we nurture creativity, confidence, and future-ready
                skills through personalized tech education designed for curious
                kids and teenagers. <br />
                More than just coding — we cultivate critical thinking,
                problem-solving, and lifelong learning with passionate mentors
                who inspire and empower every child’s unique journey. At
                NeoMinds, we believe every child carries a spark of genius
                waiting to be ignited. Our dedicated mentors don’t just teach
                tech—they inspire courage, creativity, and confidence to help
                your child dream bigger, think deeper, and build a future
                without limits.
              </p>
              {/* <p className="description">
               
              </p> */}
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

//    width: 876;
// height: 654;
// left: 566px;

//         Create the following through chatting page in nextjs with the following information.

//        (1) I don;t know if i would call it a navbar, but i guess it is. There will be flex and justify between for propifix logo and a rounded search div that contains an icon of search, the a background of search with the backgound colour of #E8E8E8. Pls note that this would should always should in the all the chat pages.
//        (2) There will also be a flex and space between username and a fully rounded image of the person's profile
//        (3) There will be a content called My(color:#9D71C6) Messages(#5D14AD)
//        (4) The main body of where all chats would be. If it has no message from the database of the backend, it would dispaly an image and a centerd content of No Messages yet (bold) and another centered content depeending on the user
//        if it is a user of agent, landlord, caretaker or artisn: When a customer sent you a message, it will appear here
//        if it is a customer: Send requests to any service provider- real estate agents or caretakers or landlord or artisans.

//        However, if there are messages in the database it will be appear there instead of those content.

//        Please you would designe it fully to be exacly a whatsapp interface. In addition if the person they are chatting with is online, there will be a green dot underneth their fully rounded profile picture.
//        (5) When a user click on any of the messages, there will be a fully rounded angle icon for going back, a fully rounded image of the person they are chating with, a div that contains their names and if they are online or not(this will be beneaath the name).

//        on click of the image, they would be naviggated to the profile image profile.
//        If the click on the div in general they would be navigated to the profile of the user they are chating with.
//        There will be a long line underneath this div
//        (6) just like whatsapp there will be date for every new chat and the date would have a rounded border and placed in the middle.
//        (7) This chating system is AI powered. When any of the users wants to message themselve, ai will suggest differnt options on what they want and they can click on content they like and it would be sent to the user from there.
//        (8) Lastly, (This part would only show in the agent, caretaker, and landlord chat). There will be a flexed div, with horizontal line above.It would contain two  which are, properties and images.
//        on click of the property which is a div that has a square border, and is inside the body were there is an icon then under it the content properties(this style also applys to the content Images too)
//        so on click of the properties, a white model that shows the properties in the profile of the agent, caretaker, or landlord.() will pop up for them to send to the user. (there will also be a carosel at the left and right side. for them to see what they have and use to send it.) The send button in the popup model will be rounded, with white text.

// .line {
//   color: var(--primary-color);
//   margin-bottom: 1rem;
//   font-size: 1rem;
//     line-height: 1;
// }
// .first-img {
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   border-radius: 1rem;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   display: block;
// }
// .first-image {
//   flex: 1;
// }
//   .first-image {
//     width: 100%;
//   }