import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <div className="product-card-image-container">
        <img 
          src={product.images?.[0] || "https://picsum.photos/300/300"} 
          alt={product.name}
          className="product-card-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x300?text=Perfume";
          }}
        />
        <div className="product-card-overlay">
          <span className="product-card-view">View Details</span>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-description">
          {product.description?.substring(0, 60)}...
        </p>
        <div className="product-card-price">₹{product.price?.toLocaleString()}</div>
      </div>
    </div>
  );
}
