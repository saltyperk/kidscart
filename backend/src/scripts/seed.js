const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Product = require('../models/Product');

dotenv.config();

const products = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 99.99,
    category: 'electronics',
    images: ['https://via.placeholder.com/500'],
    stock: 50,
    brand: 'AudioTech',
    features: ['Noise Cancellation', '30-hour battery', 'Bluetooth 5.0']
  },
  {
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    category: 'electronics',
    images: ['https://via.placeholder.com/500'],
    stock: 30,
    brand: 'TechWear',
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant']
  },
  {
    name: 'Running Shoes',
    description: 'Comfortable running shoes for all terrains',
    price: 79.99,
    category: 'sports',
    images: ['https://via.placeholder.com/500'],
    stock: 100,
    brand: 'SportMax',
    features: ['Breathable Material', 'Anti-slip Sole', 'Lightweight']
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@example.com',
      password: process.env.ADMIN_PASSWORD || 'Admin123!',
      role: 'admin'
    });

    // Create test user
    await User.create({
      name: 'Test User',
      email: 'user@example.com',
      password: 'User123!',
      role: 'user'
    });

    // Create products
    for (const productData of products) {
      await Product.create({
        ...productData,
        createdBy: adminUser._id
      });
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();