import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Banner />
      <div className="home-container" id="collections">
        <h2 className="products-section-title">Our Collection</h2>
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="products-grid">
            {products.map(p => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        ) : (
          <p className="no-products">No products available at the moment.</p>
        )}
      </div>
      
      <div className="about-section" id="about">
        <div className="about-container">
          <h2 className="about-title">About Aroma Luxe</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to Aroma Luxe, your premier destination for luxury fragrances. 
                We curate the finest collection of perfumes from world-renowned brands, 
                bringing you scents that define elegance, sophistication, and individuality.
              </p>
              <p>
                Our passion for fragrances drives us to offer only the most exquisite 
                selections, each carefully chosen to help you express your unique personality. 
                Whether you're seeking a bold statement scent or a subtle everyday fragrance, 
                we have something special for everyone.
              </p>
              <p>
                At Aroma Luxe, we believe that a great fragrance is more than just a scent—it's 
                an experience, a memory, and a form of self-expression. Explore our collection 
                and discover your signature scent today.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <h3>✨ Premium Quality</h3>
                <p>Authentic fragrances from trusted brands</p>
              </div>
              <div className="feature-item">
                <h3>🚚 Fast Delivery</h3>
                <p>Quick and secure shipping worldwide</p>
              </div>
              <div className="feature-item">
                <h3>💎 Exclusive Collection</h3>
                <p>Curated selection of luxury perfumes</p>
              </div>
              <div className="feature-item">
                <h3>⭐ Customer Reviews</h3>
                <p>Real feedback from our community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
