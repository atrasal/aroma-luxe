const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("DB Connected - Seeding...");

    await Product.deleteMany({}); // Clear old data

    await Product.insertMany([
      {
        name: "Dior Sauvage",
        description:
          "Fresh, spicy, and woody—an iconic masculine fragrance that captures the essence of freedom. With notes of bergamot, pepper, and ambroxan, this scent is perfect for the modern man who seeks adventure and sophistication.",
        price: 8999,
        sizes: ["50ml", "100ml"],
        images: [
          "http://localhost:5001/images/dior1.jpg",
          "http://localhost:5001/images/dior2.jpeg",
          "http://localhost:5001/images/dior3.jpeg",
        ],
      },
      {
        name: "Chanel Bleu de Chanel",
        description:
          "A timeless woody aromatic fragrance for men that embodies elegance and refinement. With citrus, cedar, and sandalwood notes, it's a sophisticated choice for any occasion.",
        price: 10499,
        sizes: ["50ml", "100ml", "150ml"],
        images: [
          "http://localhost:5001/images/chanel1.jpeg",
          "http://localhost:5001/images/chanel2.jpeg",
          "http://localhost:5001/images/chanel3.jpeg",
        ],
      },
      {
        name: "Versace Eros",
        description:
          "Bold and seductive fragrance with mint, green apple, and vanilla. This passionate scent is designed for those who dare to be different and embrace their desires.",
        price: 7499,
        sizes: ["50ml", "100ml"],
        images: [
          "http://localhost:5001/images/eros1.jpg",
          "http://localhost:5001/images/eros2.jpeg",
          "http://localhost:5001/images/eros3.webp",
        ],
      },
      {
        name: "Carolina Herrera 212 VIP",
        description:
          "Sweet, sexy, and addictive fragrance for party lovers. With notes of champagne, ylang-ylang, and vanilla, this scent is perfect for those who love to celebrate life.",
        price: 6999,
        sizes: ["50ml", "80ml"],
        images: [
          "http://localhost:5001/images/vip1.jpeg",
          "http://localhost:5001/images/vip2.jpeg",
          "http://localhost:5001/images/vip3.jpeg",
        ],
      },
      {
        name: "Tom Ford Black Orchid",
        description:
          "Luxurious and mysterious, this unisex fragrance features black truffle, ylang-ylang, and patchouli. A bold statement scent for those who appreciate the extraordinary.",
        price: 12499,
        sizes: ["50ml", "100ml"],
        images: [
          "http://localhost:5001/images/tom1.webp",
          "http://localhost:5001/images/tom2.jpeg",
          "http://localhost:5001/images/tom3.jpeg",
        ],
      },
    ]);

    console.log("Seed Completed!");
    process.exit();
  })
  .catch((err) => console.log(err));
