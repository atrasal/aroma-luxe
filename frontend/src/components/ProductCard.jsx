import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      style={styles.card}
    >
      <img src={product.images[0]} style={styles.img} />
      <h3>{product.name}</h3>
      <p>{product.description.substring(0, 40)}...</p>
      <strong>₹{product.price}</strong>
    </div>
  );
}

const styles = {
  card: {
    width: "220px",
    padding: "15px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "0.3s",
  },
  img: {
    width: "100%",
    height: "200px",
    borderRadius: "10px",
    objectFit: "cover"
  }
};
