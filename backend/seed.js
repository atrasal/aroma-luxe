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
            description: "Fresh, spicy, and woody—an iconic masculine fragrance that captures the essence of freedom. With notes of bergamot, pepper, and ambroxan, this scent is perfect for the modern man who seeks adventure and sophistication.",
            price: 8999,
            sizes: ["50ml", "100ml"],
            images: [
                "https://picsum.photos/id/1015/800/800",
                "https://picsum.photos/id/1016/800/800",
                "https://picsum.photos/id/1018/800/800"
            ]
        },
        {
            name: "Chanel Bleu de Chanel",
            description: "A timeless woody aromatic fragrance for men that embodies elegance and refinement. With citrus, cedar, and sandalwood notes, it's a sophisticated choice for any occasion.",
            price: 10499,
            sizes: ["50ml", "100ml", "150ml"],
            images: [
                "https://picsum.photos/id/1019/800/800",
                "https://picsum.photos/id/1020/800/800",
                "https://picsum.photos/id/1021/800/800"
            ]
        },
        {
            name: "Versace Eros",
            description: "Bold and seductive fragrance with mint, green apple, and vanilla. This passionate scent is designed for those who dare to be different and embrace their desires.",
            price: 7499,
            sizes: ["50ml", "100ml"],
            images: [
                "https://picsum.photos/id/1022/800/800",
                "https://picsum.photos/id/1023/800/800",
                "https://picsum.photos/id/1024/800/800"
            ]
        },
        {
            name: "Carolina Herrera 212 VIP",
            description: "Sweet, sexy, and addictive fragrance for party lovers. With notes of champagne, ylang-ylang, and vanilla, this scent is perfect for those who love to celebrate life.",
            price: 6999,
            sizes: ["50ml", "80ml"],
            images: [
                "https://picsum.photos/id/1025/800/800",
                "https://picsum.photos/id/1026/800/800",
                "https://picsum.photos/id/1027/800/800"
            ]
        },
        {
            name: "Tom Ford Black Orchid",
            description: "Luxurious and mysterious, this unisex fragrance features black truffle, ylang-ylang, and patchouli. A bold statement scent for those who appreciate the extraordinary.",
            price: 12499,
            sizes: ["50ml", "100ml"],
            images: [
                "https://picsum.photos/id/1028/800/800",
                "https://picsum.photos/id/1029/800/800",
                "https://picsum.photos/id/1030/800/800"
            ]
        }
    ]);

    console.log("Seed Completed!");
    process.exit();
})
.catch(err => console.log(err));
