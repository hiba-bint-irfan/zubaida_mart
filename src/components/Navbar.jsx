import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars,faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCart } from './pages/CartContext';
const Navbar = () => {
  const { getTotalItems } = useCart();
  console.log("Total items in cart:", getTotalItems());
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Products' },
    { id: 3, text: 'Featured' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Reviews' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-gray-800 p-4 flex items-center justify-between shadow-md">
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} style={{ color: '#ffffff' }}/> : <AiOutlineMenu size={20} style={{ color: '#ffffff' }}/>}
      </div>
      {/* Logo */}
      <h1 className='w-full md:w-auto text-3xl font-bold text-[#ffffff] pl-4 md:pl-0'>
        Zubaida Mart
      </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-4 justify-center'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='text-white p-4 hover:bg-[#ff9f1a] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            {/* Use Link to navigate to the specified route */}
            <Link to={`/${item.text.toLowerCase()}`}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Icons for Desktop */}
      <div className="flex items-center space-x-5 mt-4">
        
        <Link to="/cart" className="text-white cursor-pointer hover:text-[#ff9f1a] relative flex items-center">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {getTotalItems() > 0 && (
        <span className="ml-1 bg-[#ff9f1a] text-black rounded-full px-2 py-1 flex items-center justify-center text-xs">
          {getTotalItems()}
        </span>
      )}
    </Link>
        
        
      </div>

      

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-[3.5rem] w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='text-white p-4 border-b rounded-xl hover:bg-[#ff9f1a] duration-300 hover:text-white cursor-pointer border-gray-600'
          >
            {/* Use Link to navigate to the specified route */}
            <Link to={`/${item.text.toLowerCase()}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Navbar;





