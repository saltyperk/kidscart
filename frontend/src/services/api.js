import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Product APIs
export const productAPI = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
  updateStock: (id, quantity) => api.patch(`/products/${id}/stock`, { quantity })
};

// Order APIs
export const orderAPI = {
  create: (data) => api.post('/orders', data),
  getUserOrders: () => api.get('/orders/my-orders'),
  getAllOrders: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  updateStatus: (id, status) => api.patch(`/orders/${id}/status`, { status })
};

// Payment APIs
export const paymentAPI = {
  createPaymentIntent: (amount, orderId) => 
    api.post('/payment/create-payment-intent', { amount, orderId }),
  confirmPayment: (orderId, paymentIntentId) => 
    api.post('/payment/confirm-payment', { orderId, paymentIntentId }),
  createCheckoutSession: (items) => 
    api.post('/payment/create-checkout-session', { items })
};