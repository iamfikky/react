import React, { useState } from "react";
import { Link } from "react-router";
import "./navigation.css";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">Obliq</span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
          <li><Link to="/features" className="nav-link">Features</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/blog" className="nav-link">Blog</Link></li>
          <li><Link to="/signup" className="btn-signup">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};
