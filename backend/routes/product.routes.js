const express = require("express");
const Product = require("../models/Product");
const Review = require("../models/Review");

const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get product by ID + reviews
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    const reviews = await Review.find({ productId: req.params.id })
      .sort({ createdAt: -1 }); // Sort by newest first
    res.json({ product, reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add review
router.post("/reviews", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
