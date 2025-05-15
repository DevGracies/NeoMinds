"use client";

import Head from "next/head";
import { useState } from "react";
import "./Contact.css"; // Updated styles

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      const res = await fetch(
        "https://neomind-techbloom.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      setStatus(data.message || "Message sent!");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Oops! Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact Us | NeoMinds</title>
      </Head>
      <section className="contact-section">
        <div className="contact-header">
          <h1>📬 We'd Love to Hear From You</h1>
          <p>
            Whether you're a parent, school head, or partner — NeoMinds is here
            to empower your learners. Drop us a message and we’ll get back to
            you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                placeholder="Tell us how we can help your school..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="status">{status}</p>}
          </form>

          <div className="contact-sidebar">
            <div className="card">
              <h3>📞 Talk to Us</h3>
              <p>
                Prefer a quick chat? Message us directly on{" "}
                <a href="https://wa.me/2349016498621" target="_blank">
                  WhatsApp
                </a>
              </p>
              <p>
                Or send us an email:{" "}
                <a href="mailto:officialneominds@gmail.com">officialneominds@gmail.com</a>
              </p>
              <p>
                📍 Based in Lagos, serving families & schools across Nigeria
              </p>
            </div>

            <div className="card secondary">
              <h4>💡 Need a quick call?</h4>
              <p>Book a 15-min consultation with a NeoMinds educator</p>
              <a href="mailto:hello@neominds.io" className="btn-outline">
                Request a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
