import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navigation } from "./components/navigation";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { SignUp } from "./components/SignUp";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <section id="header" className="hero-section">
        <div className="hero-content">
          <h1>Create with confidence. Save time with Obliq</h1>
          <p>A powerful platform to create and manage your projects with ease.</p>
          <a href="/signup" className="cta-button">Get Started →</a>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <h3>Obliq</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Our product offers these powerful Features</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Instant Creation</h3>
            <p>Create projects in seconds with our intuitive interface.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Built for Hacking</h3>
            <p>Developer-friendly tools for power users.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Smart Automation</h3>
            <p>Automate repetitive tasks and save hours.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Collaborative Teamwork</h3>
            <p>Work together seamlessly with your team.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Flexible Customization</h3>
            <p>Tailor every aspect to your needs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Insights & Analytics</h3>
            <p>Track performance with real-time analytics.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="solutions-section">
        <h2>Deliver powerful solutions, every time.</h2>
        <p>We enable teams to create amazing things together.</p>
        <div className="solutions-grid">
          <div className="solution-card">
            <h3>For Startups</h3>
            <p>Launch faster with our startup-friendly tools.</p>
          </div>
          <div className="solution-card">
            <h3>For Enterprises</h3>
            <p>Scale your operations with enterprise-grade features.</p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="portfolio" className="integrations-section">
        <h2>Boost productivity with 50+ Powerful integrations</h2>
        <p>Connect with your favorite tools seamlessly.</p>
        <div className="integrations-grid">
          <div className="integration-icon">A</div>
          <div className="integration-icon">B</div>
          <div className="integration-icon">C</div>
          <div className="integration-icon">D</div>
          <div className="integration-icon">E</div>
          <div className="integration-icon">F</div>
          <div className="integration-icon">G</div>
          <div className="integration-icon">H</div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="testimonials" className="cta-section">
        <h2>Unlock Full Access for 7 Days — On Us</h2>
        <p>Start your free trial and experience the power of Obliq.</p>
        <a href="/signup" className="cta-button primary">Start Free Trial</a>
        <p className="small-text">No credit card required. Cancel anytime.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Obliq</h3>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="/features">Features</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/">Integrations</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Help</a></li>
                <li><a href="/">Docs</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">About</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
