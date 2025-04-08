"use client";

import Head from "next/head";
import "./Enroll.css";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Enroll() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    ageGroup: "",
    startDate: "",
    phone: "",
    notes: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const res = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({
          parentName: "",
          childName: "",
          email: "",
          ageGroup: "",
          startDate: "",
          phone: "",
          notes: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Enroll Your Child | NeoMinds</title>
      </Head>
      <section className="enroll-section">
        <div className="enroll-header">
          <h1 className="enroll-title">🌟 Enroll Your Child</h1>
          <p className="enroll-subtext">
            Ready to watch your child{" "}
            <span className="highlight">bloom in tech</span>? Fill out this form
            and we’ll match you with the perfect instructor and program 🌱
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="enroll-form">
            <div>
              <label className="form-label">👨‍👩‍👧 Parent Name</label>
              <input
                type="text"
                name="parentName"
                placeholder="Parent's Name"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">📧 Email</label>
              <input
                type="email"
                name="email"
                placeholder="Parent's Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">👦 Child's Name</label>
              <input
                type="text"
                name="childName"
                placeholder="Child's Name"
                value={formData.childName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">🎂 Age Group</label>
              <select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Choose age group</option>
                <option>6–9 (MiniCoders)</option>
                <option>10–13 (CodeStarters)</option>
                <option>14–16 (Junior Developers)</option>
                <option value="Tech Explorers Track">
                  Tech Explorers Track
                </option>
              </select>
            </div>
            <div>
              <label className="form-label">📅 Preferred Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">🗣️ Additional Notes</label>
              <textarea
                rows={3}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="form-input"
                placeholder="Any learning preferences, goals, or questions?"
              />
            </div>
            <button type="submit" className="submit-btn">
              🚀 Submit & Start the Journey
            </button>
          </form>
        ) : (
          <>
            {status === "success" && (
              <div className="success-box">
                <CheckCircle className="success-icon" />
                <h2 className="success-title">You’re All Set!</h2>
                <p className="success-text">
                  Thank you for enrolling. A member of our team will reach out
                  soon with next steps! 🌸
                </p>
              </div>
            )}
            {status === "error" && (
              <p className="status-message error">
                ⚠️ Something went wrong. Please try again.
              </p>
            )}
          </>
        )}
      </section>
    </>
  );
}
