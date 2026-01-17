const express = require("express");
const Product = require("../models/Product");
const Review = require("../models/Review");

const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get product by ID + reviews
router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  const reviews = await Review.find({ productId: req.params.id });
  res.json({ product, reviews });
});

// Add review
router.post("/reviews", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json(review);
});

module.exports = router;
