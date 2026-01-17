import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5001/api"
});

export const getProducts = () => API.get("/products");
export const getProductDetails = (id) => API.get(`/products/${id}`);
export const addReview = (data) => API.post("/reviews", data);
