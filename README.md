# Full-Stack E-Commerce Website

A modern, fully-featured e-commerce platform built with React, Node.js, MongoDB, and Stripe.

## Features

- 🛍️ Full shopping cart functionality
- 💳 Secure payment processing with Stripe
- 👤 User authentication and authorization
- 🔐 Admin dashboard for product management
- 📦 Order tracking and management
- 🔍 Product search and filtering
- 📱 Responsive design
- 🚀 Fast and scalable

## Tech Stack

### Frontend
- React 18
- React Router v6
- Tailwind CSS
- Stripe Integration
- Context API for state management
- Axios for API calls

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- Stripe Payment Processing
- Cloudinary for image storage
- Bcrypt for password hashing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Stripe account
- Cloudinary account (optional)

### Backend Setup

1. Navigate to backend directory:
\`\`\`bash
cd backend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env` file with your credentials:
\`\`\`env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=Admin123!
\`\`\`

4. Start the server:
\`\`\`bash
npm run dev
\`\`\`

### Frontend Setup

1. Navigate to frontend directory:
\`\`\`bash
cd frontend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env` file:
\`\`\`env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
\`\`\`

4. Start the development server:
\`\`\`bash
npm start
\`\`\`

## Usage

### Customer Features
1. Browse products by category
2. Search and filter products
3. Add items to cart
4. Checkout with Stripe
5. Track orders

### Admin Features
1. Login with admin credentials
2. Add/Edit/Delete products
3. Manage inventory
4. View and update orders
5. Dashboard with statistics

## Default Credentials

### Admin Account
- Email: admin@example.com
- Password: Admin123!

### Test User Account
- Email: user@example.com
- Password: User123!

### Test Payment Cards (Stripe)
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile
- PUT `/api/auth/profile` - Update profile

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Add product (Admin)
- PUT `/api/products/:id` - Update product (Admin)
- DELETE `/api/products/:id` - Delete product (Admin)

### Orders
- POST `/api/orders` - Create order
- GET `/api/orders/my-orders` - Get user orders
- GET `/api/orders/:id` - Get order details
- GET `/api/orders` - Get all orders (Admin)
- PATCH `/api/orders/:id/status` - Update order status (Admin)

### Payment
- POST `/api/payment/create-payment-intent` - Create Stripe payment
- POST `/api/payment/confirm-payment` - Confirm payment

## Deployment

### Backend Deployment (Heroku/Railway)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder
3. Set environment variables
4. Configure redirects for SPA

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT

## Support

For support, email support@shophub.com