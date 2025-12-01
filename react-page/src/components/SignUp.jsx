import React, { useState } from "react";
import "./SignUp.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      company: "",
      agreeToTerms: false,
    });
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Your Obliq Account</h1>
          <p>Join thousands of teams building better products</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company (optional)</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeToTerms">
              I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="signup-button">Create Account</button>

          <p className="signin-link">
            Already have an account? <a href="#">Sign In</a>
          </p>
        </form>

        <div className="signup-benefits">
          <h3>What You Get</h3>
          <ul>
            <li>✓ Free 7-day trial, no credit card required</li>
            <li>✓ Access to all features</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Cancel anytime</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
