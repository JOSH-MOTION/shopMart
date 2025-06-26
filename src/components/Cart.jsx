// src/components/Cart.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty. <Link to="/product" className="text-blue-600 hover:underline">Continue shopping</Link></p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-700">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button className="mt-4 bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;