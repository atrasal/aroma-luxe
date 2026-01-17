const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log("DB Connected - Seeding...");

    await Product.deleteMany({}); // Clear old data

    await Product.insertMany([
        {
            name: "Dior Sauvage",
            description: "Fresh, spicy, and woody—an iconic masculine fragrance.",
            price: 8999,
            sizes: ["50ml", "100ml"],
            images: [
                "https://i.imgur.com/7pGJmZf.jpg",
                "https://i.imgur.com/V4mPz5H.jpg"
            ]
        },
        {
            name: "Chanel Bleu de Chanel",
            description: "A timeless woody aromatic fragrance for men.",
            price: 10499,
            sizes: ["50ml", "150ml"],
            images: [
                "https://i.imgur.com/nB0uTnR.jpg"
            ]
        },
        {
            name: "Versace Eros",
            description: "Bold and seductive fragrance with mint, green apple, vanilla.",
            price: 7499,
            sizes: ["50ml", "100ml"],
            images: [
                "https://i.imgur.com/7XoBbZq.jpg"
            ]
        },
        {
            name: "Carolina Herrera 212 VIP",
            description: "Sweet, sexy, and addictive fragrance for party lovers.",
            price: 6999,
            sizes: ["80ml"],
            images: [
                "https://i.imgur.com/Zl3vL2a.jpg"
            ]
        }
    ]);

    console.log("Seed Completed!");
    process.exit();
})
.catch(err => console.log(err));
