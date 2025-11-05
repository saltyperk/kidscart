const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middleware/auth');

router.post('/create-payment-intent', authMiddleware, paymentController.createPaymentIntent);
router.post('/confirm-payment', authMiddleware, paymentController.confirmPayment);
router.post('/create-checkout-session', authMiddleware, paymentController.createCheckoutSession);

module.exports = router;