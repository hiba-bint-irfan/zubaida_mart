import React, { useState } from 'react';
import BillingMethod from './BillingMethod';
import { useCart } from './CartContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
const CheckoutPage = () => {
    const { cartItems} = useCart();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cart, setCart] = useState([]);

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit form data and place order
    const formData = { ...userInfo, paymentMethod, cart };
    console.log(formData);
    // You can send the form data to your backend server for further processing
  };

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryprice = 100;
  return (
    <div>
        <Navbar/>
        <div className="container mx-auto mt-10 pt-20 px-2 flex flex-wrap">
      {/* Checkout Information Section */}
      <div className="w-full md:w-2/3 px-4 mb-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter your name"
        name="name"
        value={userInfo.name}
        onChange={handleUserInfoChange}
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Enter your email"
        name="email"
        value={userInfo.email}
        onChange={handleUserInfoChange}
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
        Phone number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone-number"
        type="phonenumber"
        placeholder="Enter your phone number"
        name="phonenumber"
        value={userInfo.phoneNumber}
        onChange={handleUserInfoChange}
        required
      />
    </div>
    <div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
      </div>
      <div>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          id="address"
          placeholder="Enter your address"
          name="address"
          value={userInfo.address}
          onChange={handleUserInfoChange}
          required
        ></textarea>
      </div>
    </div>
  </div>
</div>


          {/* Billing Method Section */}
          <div className="mb-8">
            <BillingMethod onSelect={handlePaymentMethodChange} />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="w-full md:w-1/3 px-4 mb-4">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
    
    {cartItems.map((item, index) => (
      <div key={index} className="grid grid-cols-3 gap-4 border-b border-gray-200 py-2">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded mr-2" />
        <span className="">{item.name}</span>
      </div>
      <div className="text-right">Rs. {(item.price * item.quantity).toFixed(2)}</div>
      <div className="text-right">Qty: {item.quantity}</div>
    </div>
    
    
    
    ))}
    <div className="flex justify-between mt-4">
      <div className="">SubTotal:</div>
      <div className="">{totalPrice.toFixed(2)}</div>
    </div>
    <div className="flex justify-between mt-0">
      <div className="">Delivery Price:</div>
      <div className="">{deliveryprice.toFixed(2)}</div>
    </div>
    <div className="flex justify-between mt-2">
      <div className="font-semibold">Total:</div>
      <div className="font-bold">{(deliveryprice+totalPrice).toFixed(2)}</div>
    </div>
  </div>
</div>

    </div>
        <Footer/>

    </div>
    
  );
};

export default CheckoutPage;
