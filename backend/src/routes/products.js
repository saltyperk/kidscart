const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Admin routes
router.post('/', 
  authMiddleware, 
  adminMiddleware, 
  productController.uploadMiddleware,
  productController.createProduct
);

router.put('/:id', 
  authMiddleware, 
  adminMiddleware, 
  productController.updateProduct
);

router.delete('/:id', 
  authMiddleware, 
  adminMiddleware, 
  productController.deleteProduct
);

router.patch('/:id/stock', 
  authMiddleware, 
  adminMiddleware, 
  productController.updateStock
);

module.exports = router;