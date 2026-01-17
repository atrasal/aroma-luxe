import { useNavigate } from "react-router-dom";
import "./Banner.css";

export default function Banner() {
  const navigate = useNavigate();

  const handleExplore = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });
  };

  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">Discover Luxury Fragrances</h1>
        <p className="banner-subtitle">Indulge in the finest scents crafted for the extraordinary</p>
        <button className="banner-btn" onClick={handleExplore}>
          Explore Collection
        </button>
      </div>
    </div>
  );
}
