"use client";

import Head from "next/head";
import { useState } from "react";
import "./Contact.css"; // Import the custom CSS

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.message);
    if (res.ok) setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Contact | NeoMinds</title>
      </Head>
      <section className="contact-section">
        <h1 className="contact-title">📬 Get in Touch</h1>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label className="form-label">Your Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Message / Questions</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>

          <div className="contact-info">
            Or reach us directly via <br />
            📱{" "}
            <a
              href="https://wa.me/09045954844"
              target="_blank"
              className="contact-link"
            >
              WhatsApp
            </a>{" "}
            or 📧{" "}
            <a href="mailto:graceadegunle16@gmail.com" className="contact-link">
              hello@neominds.io
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
