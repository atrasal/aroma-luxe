import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCollectionsClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const productsSection = document.querySelector(".home-container");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const productsSection = document.querySelector(".home-container");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.querySelector(".about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const aboutSection = document.querySelector(".about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h2 className="navbar-title">Aroma Luxe</h2>
        </Link>
        
        <div 
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <a 
            href="#collections" 
            className="nav-link"
            onClick={handleCollectionsClick}
          >
            Collections
          </a>
          <a 
            href="#about" 
            className="nav-link"
            onClick={handleAboutClick}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
