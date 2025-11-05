import React from 'react';
import { useCart } from '../../context/CartContext';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm">
      <img
        src={item.images?.[0] || 'https://via.placeholder.com/100'}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
        <p className="text-gray-500 text-sm">{item.category}</p>
        <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex flex-col items-end space-y-2">
        <button
          onClick={() => removeFromCart(item._id)}
          className="text-red-500 hover:bg-red-50 p-1 rounded transition"
        >
          <FiTrash2 className="w-4 h-4" />
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateQuantity(item._id, item.quantity - 1)}
            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            disabled={item.quantity <= 1}
          >
            <FiMinus className="w-3 h-3" />
          </button>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item._id, item.quantity + 1)}
            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            disabled={item.quantity >= item.stock}
          >
            <FiPlus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;