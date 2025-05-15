"use client";

import React from "react";
import "./ContactCTA.css";
import { Mail, Phone, MapPin, MessageSquareHeart } from "lucide-react";
import Image from "next/image";

const ContactCTA = () => (
  <section className="contact-cta" id="contact">
    <div className="contact-container">
      <div className="contact-text">
        <h2>Let’s Shape the Future of Learning Together 🚀</h2>
        <p>
          Whether you're a school leader, educator, or parent — we’re here to collaborate. 
          Our team is ready to walk you through how NeoMinds can empower your students 
          with next-gen tech skills and creativity.
        </p>

        <ul className="contact-info">
          <li>
            <Mail size={20} />{" "}
            <a href="mailto:officialNeominds@gmail.com">
              officialNeominds@gmail.com
            </a>
          </li>
          <li>
            <Phone size={20} />{" "}
            <a href="tel:+2349016496621">+234 901 649 6621</a>
          </li>
          <li>
            <MapPin size={20} /> Lagos, Nigeria — Available Nationwide (Online & On-Site)
          </li>
          <li>
            <MessageSquareHeart size={20} /> Replies within 24 hours on weekdays
          </li>
        </ul>

        <div className="cta-buttons">
          <a href="mailto:officialNeominds@gmail.com" className="cta-button primary">
            📩 Send Us an Email
          </a>
          <a href="tel:+2349016496621" className="cta-button secondary">
            📞 Call Now
          </a>
        </div>
      </div>

      <div className="contact-image">
        <Image
          src="/logo.png"
          alt="Contact NeoMinds"
          width={200}
          height={200}
        />
      </div>
    </div>
  </section>
);

export default ContactCTA;
