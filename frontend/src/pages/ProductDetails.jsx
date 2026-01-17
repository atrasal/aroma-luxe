import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails, addReview } from "../services/api";

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getProductDetails(id).then(res => setData(res.data));
  }, [id]);

  if (!data) return <h2>Loading...</h2>;

  const submitReview = async () => {
    await addReview({
      productId: id,
      username: "Aadi",
      comment,
      rating: 5
    });

    alert("Review added!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{data.product.name}</h1>

      {data.product.images.map((img, i) => (
        <img key={i} src={img} width="200" style={{ marginRight: "10px" }} />
      ))}

      <p>{data.product.description}</p>
      <h2>₹{data.product.price}</h2>

      <h3>Reviews</h3>
      {data.reviews.map(r => (
        <p key={r._id}><b>{r.username}</b>: {r.comment}</p>
      ))}

      <textarea
        placeholder="Write review..."
        onChange={e => setComment(e.target.value)}
      />

      <br />
      <button onClick={submitReview}>Submit Review</button>
    </div>
  );
}
