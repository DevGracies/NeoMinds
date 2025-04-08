"use client";

import { useState } from "react";
import Head from "next/head";
import "./Enroll.css";

export default function Enroll() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    age: "",
    program: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          age: "",
          program: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Enroll | NeoMinds</title>
      </Head>
      <div className="enroll-container">
        <form onSubmit={handleSubmit} className="enroll-form">
          <h2 className="enroll-title">Enroll Your Child</h2>

          <input
            className="input-field"
            name="parentName"
            placeholder="Parent's Name"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            name="childName"
            placeholder="Child's Name"
            value={formData.childName}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            name="email"
            type="email"
            placeholder="Parent's Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            name="age"
            type="number"
            placeholder="Child's Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <select
            className="input-field"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="">Select a Program</option>
            <option value="MiniCoders">MiniCoders (6–9)</option>
            <option value="CodeStarters">CodeStarters (10–13)</option>
            <option value="Junior Developers">Junior Developers (14–16)</option>
            <option value="Tech Explorers Track">Tech Explorers Track</option>
          </select>

          <button type="submit" className="submit-button">
            Submit
          </button>

          {status === "success" && (
            <p className="status-message success">🎉 Enrollment Successful!</p>
          )}
          {status === "error" && (
            <p className="status-message error">
              ⚠️ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
