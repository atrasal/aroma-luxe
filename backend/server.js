const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database connection
connectDB();

app.get("/", (req, res) => {
  res.send("Aroma Luxe API Running");
});

// start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api", require("./routes/product.routes"));

