"use client";

import React from "react";
import "./PricingPlans.css";

const plans = [
  {
    tier: "Basic",
    price: "₦50k–₦80k/month",
    desc: "Perfect for trial or small group classes. Includes one or two classes, twice monthly.",
    icon: "📘",
    highlight: false,
  },
  {
    tier: "Standard",
    price: "₦100k–₦150k/month",
    desc: "Ideal for consistent learning with full class levels and weekly sessions.",
    icon: "📗",
    highlight: true, // highlighted plan
  },
  {
    tier: "Premium",
    price: "₦250k–₦500k/term",
    desc: "Best for full integration into school schedules with personalized setups.",
    icon: "🌟",
    highlight: false,
  },
];

const PricingPlans = () => (
  <section className="pricing-section">
    <div className="container">
      <h2 className="section-title">💡 Flexible Pricing</h2>
      <p className="section-sub">
        Choose a plan that works for your school or learning goals.
      </p>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            key={i}
          >
            <div className="plan-icon">{plan.icon}</div>
            <h3 className="plan-title">{plan.tier}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-desc">{plan.desc}</p>
            <button className="plan-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPlans;
