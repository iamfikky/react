import React from "react";
import "./Features.css";

export const Features = () => {
  const features = [
    {
      title: "Instant Creation",
      icon: "📊",
      description: "Create projects in seconds with our intuitive interface. No coding required.",
    },
    {
      title: "Built for Hacking",
      icon: "⚡",
      description: "Developer-friendly tools with APIs and webhooks for power users.",
    },
    {
      title: "Smart Automation",
      icon: "🔒",
      description: "Automate repetitive tasks and save hours every week.",
    },
    {
      title: "Collaborative Teamwork",
      icon: "🤝",
      description: "Work together seamlessly with your team in real-time.",
    },
    {
      title: "Flexible Customization",
      icon: "🎨",
      description: "Tailor every aspect to your brand and workflow needs.",
    },
    {
      title: "Insights & Analytics",
      icon: "📈",
      description: "Track performance with real-time analytics and reporting.",
    },
  ];

  return (
    <section className="features-section">
      <h1>Powerful Features</h1>
      <p>Everything you need to succeed</p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
