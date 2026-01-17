# Aroma Luxe - Luxury Perfume E-Commerce Website

A full-stack e-commerce website for selling luxury perfumes, built with React and Node.js. This project features a modern, responsive design with an engaging user interface for browsing and purchasing premium fragrances.

## 🚀 Features

### Homepage
- **Responsive Navigation Bar**: Sticky navbar with gradient design and mobile hamburger menu
- **Call-to-Action Banner**: Eye-catching banner with smooth animations and scroll functionality
- **Product Cards**: Interactive product cards with hover effects, displaying product images, names, descriptions, and prices
- **Smooth Navigation**: Clicking on product cards redirects to detailed product pages

### Product Details Page
- **Image Gallery**: Multiple product images with thumbnail navigation
- **Product Information**: Complete product details including full description, price, and available sizes
- **Size Selection**: Interactive size selection with visual feedback
- **Reviews Section**: 
  - Read existing customer reviews with star ratings
  - Add new reviews with name, rating (1-5 stars), and comment
  - Reviews sorted by newest first
- **Social Sharing**: Share products on social media platforms (Twitter, Facebook, WhatsApp, LinkedIn) or copy link to clipboard

### Additional Features
- **About Section**: Informative section about the company and features
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop
- **Loading States**: Elegant loading spinners for better UX
- **Error Handling**: Graceful error handling with fallback images

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **React Router DOM 7.12.0** - Client-side routing
- **Axios 1.13.2** - HTTP client for API requests
- **Vite 7.2.4** - Build tool and dev server
- **CSS3** - Modern styling with animations and gradients

### Backend
- **Node.js** - Runtime environment
- **Express 5.2.1** - Web framework
- **MongoDB** - Database
- **Mongoose 9.1.4** - MongoDB object modeling
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 17.2.3** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aroma-luxe
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

**Example MongoDB connection strings:**
- Local: `mongodb://localhost:27017/aroma-luxe`
- MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/aroma-luxe?retryWrites=true&w=majority`

## 🚀 Running the Application

### 1. Start MongoDB
Make sure MongoDB is running on your system or use MongoDB Atlas.

### 2. Seed the Database (First time only)
```bash
cd backend
node seed.js
```

This will populate the database with 5 sample perfume products.

### 3. Start the Backend Server
```bash
cd backend
npm run dev
```

The backend server will run on `http://localhost:5001`

### 4. Start the Frontend Development Server
Open a new terminal:
```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or the next available port)

### 5. Access the Application
Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
aroma-luxe/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── models/
│   │   ├── Product.js         # Product schema
│   │   └── Review.js          # Review schema
│   ├── routes/
│   │   └── product.routes.js  # API routes
│   ├── seed.js                # Database seeding script
│   ├── server.js              # Express server setup
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Banner.jsx     # Homepage banner component
│   │   │   ├── Navbar.jsx     # Navigation bar component
│   │   │   └── ProductCard.jsx # Product card component
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Homepage component
│   │   │   └── ProductDetails.jsx # Product details page
│   │   ├── services/
│   │   │   └── api.js         # API service functions
│   │   ├── App.jsx            # Main app component with routing
│   │   └── main.jsx           # React entry point
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID with reviews

### Reviews
- `POST /api/reviews` - Add a new review
  ```json
  {
    "productId": "product_id",
    "username": "User Name",
    "comment": "Review comment",
    "rating": 5
  }
  ```

## 🎨 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop
- Hamburger menu for mobile navigation

### Interactive Elements
- Hover effects on product cards (lift, zoom, overlay)
- Smooth scrolling navigation
- Image gallery with thumbnail selection
- Star rating system for reviews

### User Experience
- Loading states with spinners
- Error handling with fallback images
- Smooth animations and transitions
- Intuitive navigation

## 🧪 Development

### Backend Scripts
```bash
npm start    # Start production server
npm run dev  # Start development server with nodemon
```

### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview   # Preview production build
npm run lint     # Run ESLint
```

## 📝 Database Models

### Product Schema
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  sizes: [String],
  images: [String]
}
```

### Review Schema
```javascript
{
  productId: ObjectId (required, ref: Product),
  username: String (required),
  comment: String (required),
  rating: Number (required, min: 1, max: 5),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🎯 Future Enhancements

Potential features to add:
- User authentication and accounts
- Shopping cart functionality
- Checkout and payment integration
- Order management
- Product search and filtering
- Wishlist functionality
- Admin dashboard
- Email notifications

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Developed as a full-stack e-commerce project demonstration.

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the database solution
- Unsplash/Picsum for placeholder images
- All open-source contributors

---

**Note**: Make sure to update the MongoDB connection string in the `.env` file before running the application. For production deployment, ensure all environment variables are properly configured and secure.
