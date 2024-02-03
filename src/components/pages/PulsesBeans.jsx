// src/App.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from "../Footer";

const products = [
    {
      id: 1,
      name: 'Daal Chana 1KG',
      image: 'chana-dal.jpg',
      price: 120.99,
    },
    {
      id: 2,
      name: 'Daal Chana 500G',
      image: 'chana-dal.jpg',
      price: 120.99,
    },
    {
      id: 3,
      name: 'Daal Masoor 1KG',
      image: 'masoor-dal.jpg',
      price: 120.99,
    },
    {
      id: 4,
      name: 'Daal Masoor 500G',
      image: 'masoor-dal.jpg',
      price: 120.99,
    },
    {
      id: 5,
      name: 'Daal Moong 1KG',
      image: 'moong-dal.jpg',
      price: 120.99,
    },
    {
      id: 6,
      name: 'Daal Moong 500G',
      image: 'moong-dal.jpg',
      price: 120.99,
    },
    {
      id: 7,
      name: 'Lobia White 1KG',
      image: 'lobia.jpg',
      price: 120.99,
    },
    {
      id: 8,
      name: 'Lobia White 500G',
      image: 'lobia.jpg',
      price: 120.99,
    },
    {
      id: 9,
      name: 'Lobia Red 1KG',
      image: 'lobia-red.jpg',
      price: 120.99,
    },
    {
      id: 10,
      name: 'Lobia Red 500G',
      image: 'lobia-red.jpg',
      price: 120.99,
    },
    {
      id: 11,
      name: 'Daal Mash 1KG',
      image: 'daal-mash.jpg',
      price: 120.99,
    },
    {
      id: 12,
      name: 'Daal Mash 500G',
      image: 'daal-mash.jpg',
      price: 120.99,
    },
    {
      id: 13,
      name: 'Daal Arhar 1KG',
      image: 'daal-arhar.jpg',
      price: 120.99,
    },
    {
      id: 14,
      name: 'Daal Arhar 500G',
      image: 'daal-arhar.jpg',
      price: 120.99,
    },
    {
      id: 15,
      name: 'Daal Malka Masoor 1KG',
      image: 'daal-malka.jpg',
      price: 120.99,
    },
    {
      id: 16,
      name: 'Daal Malka Masoor 500G',
      image: 'daal-malka.jpg',
      price: 120.99,
    },
    {
      id: 17,
      name: 'Sabut Mash 1KG',
      image: 'sabut-mash.jpg',
      price: 120.99,
    },
    {
      id: 18,
      name: 'Sabut Mash 500G',
      image: 'sabut-mash.jpg',
      price: 120.99,
    },
    // Add more products as needed
  ];

function PulsesBeans() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
        <Navbar />
    
    <div className="container mx-auto mt-8 pt-16 pb-16">
        <h1 class="heading" data-aos="fade-up"> Pulses <span>& </span> Beans </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md">
            <img
              src={require(`../images/${product.image}`)}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* Cart Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default PulsesBeans;
