import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails, addReview } from "../services/api";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(5);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    getProductDetails(id).then(res => {
      setData(res.data);
      if (res.data.product.sizes?.length > 0) {
        setSelectedSize(res.data.product.sizes[0]);
      }
    });
  }, [id]);

  if (!data) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  const submitReview = async (e) => {
    e.preventDefault();
    if (!username.trim() || !comment.trim()) {
      alert("Please fill in all fields");
      return;
    }

    await addReview({
      productId: id,
      username: username.trim(),
      comment: comment.trim(),
      rating
    });

    // Refresh product data
    const res = await getProductDetails(id);
    setData(res.data);
    setComment("");
    setUsername("");
    setRating(5);
    alert("Review added successfully!");
  };

  const shareProduct = () => {
    const url = window.location.href;
    const text = `Check out ${data.product.name} at Aroma Luxe!`;
    
    if (navigator.share) {
      navigator.share({
        title: data.product.name,
        text: text,
        url: url
      }).catch(err => console.log("Error sharing", err));
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url).then(() => {
        alert("Product link copied to clipboard!");
      });
    }
  };

  const shareToSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out ${data.product.name} at Aroma Luxe!`);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="product-details">
      <div className="product-details-container">
        {/* Image Gallery Section */}
        <div className="product-gallery">
          <div className="main-image-container">
            <img 
              src={data.product.images?.[selectedImage] || "https://picsum.photos/600/600"} 
              alt={data.product.name}
              className="main-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x600?text=Perfume";
              }}
            />
          </div>
          {data.product.images?.length > 1 && (
            <div className="thumbnail-container">
              {data.product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${data.product.name} view ${i + 1}`}
                  className={`thumbnail ${selectedImage === i ? "active" : ""}`}
                  onClick={() => setSelectedImage(i)}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/100x100?text=Perfume";
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="product-info">
          <h1 className="product-title">{data.product.name}</h1>
          
          <div className="product-price">₹{data.product.price?.toLocaleString()}</div>
          
          <p className="product-description">{data.product.description}</p>

          {/* Sizes Selection */}
          {data.product.sizes && data.product.sizes.length > 0 && (
            <div className="product-sizes">
              <h3>Available Sizes:</h3>
              <div className="size-options">
                {data.product.sizes.map((size, i) => (
                  <button
                    key={i}
                    className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Share Button */}
          <div className="share-section">
            <button className="share-btn" onClick={shareProduct}>
              <span>🔗</span> Share Product
            </button>
            <div className="social-share-buttons">
              <button 
                className="social-btn twitter" 
                onClick={() => shareToSocial("twitter")}
                title="Share on Twitter"
              >
                Twitter
              </button>
              <button 
                className="social-btn facebook" 
                onClick={() => shareToSocial("facebook")}
                title="Share on Facebook"
              >
                Facebook
              </button>
              <button 
                className="social-btn whatsapp" 
                onClick={() => shareToSocial("whatsapp")}
                title="Share on WhatsApp"
              >
                WhatsApp
              </button>
              <button 
                className="social-btn linkedin" 
                onClick={() => shareToSocial("linkedin")}
                title="Share on LinkedIn"
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2 className="reviews-title">Customer Reviews</h2>
        
        {/* Add Review Form */}
        <form className="review-form" onSubmit={submitReview}>
          <h3>Write a Review</h3>
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <div className="rating-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? "filled" : ""}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
              <span className="rating-value">{rating} / 5</span>
            </div>
          </div>
          <div className="form-group">
            <label>Your Review:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts about this product..."
              rows="4"
              required
            />
          </div>
          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>

        {/* Reviews List */}
        <div className="reviews-list">
          {data.reviews && data.reviews.length > 0 ? (
            data.reviews.map((review) => (
              <div key={review._id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-name">{review.username}</div>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < review.rating ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
                {review.createdAt && (
                  <div className="review-date">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="no-reviews">No reviews yet. Be the first to review this product!</p>
          )}
        </div>
      </div>
    </div>
  );
}
