import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for getting started",
      features: ["Up to 5 projects", "Basic analytics", "Community support"],
    },
    {
      name: "Professional",
      price: "$79",
      description: "For growing teams",
      features: ["Up to 50 projects", "Advanced analytics", "Priority support", "Team collaboration"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited projects", "Custom analytics", "24/7 support", "Dedicated account manager"],
    },
  ];

  return (
    <section className="pricing-section">
      <h1>Simple, Transparent Pricing</h1>
      <p>Choose the plan that works best for you</p>
      
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}>
            <h2>{plan.name}</h2>
            <div className="price">{plan.price}</div>
            <p className="description">{plan.description}</p>
            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};
