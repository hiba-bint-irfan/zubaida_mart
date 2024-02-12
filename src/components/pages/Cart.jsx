import React from 'react';
import { useCart } from './CartContext';
import Navbar from '../Navbar';
import Footer from "../Footer";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

  // Function to handle incrementing the quantity
  const handleIncrement = (id) => {
    updateCartItemQuantity(id, 1);
  };

  // Function to handle decrementing the quantity
  const handleDecrement = (id) => {
    updateCartItemQuantity(id, -1);
  };
  
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 pt-16 pb-16">
        <h1 className="heading mb-8" data-aos="fade-up">Shopping <span>Cart</span></h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className='cartinfo px-2'>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 text-left">Product</th>
                    <th className="py-2 text-left">Price</th>
                    <th className="py-2 text-left">Quantity</th>
                    <th className="py-2 text-left">Total</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-300">
                      <td className="py-4">
                        <div className="flex items-center">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                          <p className="text-lg font-semibold">{item.name}</p>
                        </div>
                      </td>
                      <td className="py-4 px-1">${item.price.toFixed(2)}</td>
                      <td className="py-4 px-1">
                        <div className="flex items-center">
                          <button onClick={() => handleDecrement(item.id)} className="bg-gray-300 text-gray-600 px-2 py-1 rounded-md mr-2">-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleIncrement(item.id)} className="bg-gray-300 text-gray-600 px-2 py-1 rounded-md ml-2">+</button>
                        </div>
                      </td>
                      <td className="py-4 px-1">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="py-4 px-1">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className=" text-black px-3 py-1 rounded-md hover:bg-red-600"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-3 flex text-right items-center">
            <div className="text-lg font-semibold ">Total Price:</div>
            <div className="text-lg font-semibold">${totalPrice.toFixed(2)}</div>
          </div>
          <Link to="/checkout">
              <button  type="submit" class="mt-4 inline-flex w-full items-center justify-center rounded bg-gray-800 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
            </Link>
            </div>
          
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
