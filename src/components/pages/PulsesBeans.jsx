// src/App.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from "../Footer";
import { useCart } from './CartContext';
import imagePaths from '../images/pulsebean';

const products = [
  {
    id: 1,
    name: 'Daal Chana 1KG',
    image: imagePaths.DaalChana,
    price: 120,
  },
  {
    id: 2,
    name: 'Daal Chana 500G',
    image: imagePaths.DaalChana,
    price: 120,
  },
  {
    id: 3,
    name: 'Daal Masoor 1KG',
    image: imagePaths.DaalMasoor,
    price: 120,
  },
  {
    id: 4,
    name: 'Daal Masoor 500G',
    image: imagePaths.DaalMasoor,
    price: 120,
  },
  {
    id: 5,
    name: 'Daal Moong 1KG',
    image: imagePaths.DaalMoong,
    price: 120,
  },
  {
    id: 6,
    name: 'Daal Moong 500G',
    image: imagePaths.DaalMoong,
    price: 120,
  },
  {
    id: 7,
    name: 'Lobia White 1KG',
    image: imagePaths.LobiaWhite,
    price: 120,
  },
  {
    id: 8,
    name: 'Lobia White 500G',
    image: imagePaths.LobiaWhite,
    price: 120,
  },
  {
    id: 9,
    name: 'Lobia Red 1KG',
    image: imagePaths.LobiaRed,
    price: 120,
  },
  {
    id: 10,
    name: 'Lobia Red 500G',
    image: imagePaths.LobiaRed,
    price: 120,
  },
  {
    id: 11,
    name: 'Daal Mash 1KG',
    image: imagePaths.DaalMash,
    price: 120,
  },
  {
    id: 12,
    name: 'Daal Mash 500G',
    image: imagePaths.DaalMash,
    price: 120,
  },
  {
    id: 13,
    name: 'Daal Arhar 1KG',
    image: imagePaths.DaalArhar,
    price: 120,
  },
  {
    id: 14,
    name: 'Daal Arhar 500G',
    image: imagePaths.DaalArhar,
    price: 120,
  },
  {
    id: 15,
    name: 'Daal Malka Masoor 1KG',
    image: imagePaths.DaalMalkaMasoor,
    price: 120,
  },
  {
    id: 16,
    name: 'Daal Malka Masoor 500G',
    image: imagePaths.DaalMalkaMasoor,
    price: 120,
  },
  {
    id: 17,
    name: 'Sabut Mash 1KG',
    image: imagePaths.SabutMash,
    price: 120,
  },
  {
    id: 18,
    name: 'Sabut Mash 500G',
    image: imagePaths.SabutMash,
    price: 120,
  },
  // Add more products as needed
];

function PulsesBeans() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
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
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}

export default PulsesBeans;
