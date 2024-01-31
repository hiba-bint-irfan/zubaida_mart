import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars,faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './css/Navbar.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    const colorCode = '#2c2c54';
    return (
      <nav style={{ backgroundColor: colorCode}} className="flex items-center justify-between flex-wrap p-6" > {/* Increased padding (p-6) */}
        <div className="block lg:hidden">
          <button onClick={toggleNavbar} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <FontAwesomeIcon icon={faBars} className="h-4 w-4" /> {/* Menu icon on mobile */}
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-3xl tracking-tight">Zubaida Mart</span>
      </div>
        <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-lg lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
            Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
              Features
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
              Products
            </a>
          </div>
          
        </div>
        <div>
            <a href="#cart" className="text-lg text-white hover:text-teal-200 mr-4">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
            <a href="#profile" className="text-lg text-white hover:text-teal-200 mr-4">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
      </nav>
    );
};

export default Navbar;





// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleNavbar = () => {
//       setIsOpen(!isOpen);
//     };
  
//     return (
//       <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6"> {/* Increased padding (p-6) */}
//         <div className="flex items-center flex-shrink-0 text-white mr-6">
//           <span className="font-semibold text-3xl tracking-tight">Zubaida Mart</span> {/* Increased text size (text-3xl) */}
//         </div>
//         <div className="block lg:hidden">
//         <button onClick={toggleNavbar} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
//           <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg> {/* Adjusted size of the menu icon (h-4 w-4) */}
//         </button>
//         </div>
//         <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
//           <div className="text-lg lg:flex-grow">
//             <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-teal-200 mr-4">
//             Home
//             </a>
//             <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-teal-200 mr-4">
//               Features
//             </a>
//             <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  text-white  hover:text-teal-200 mr-4">
//               Products
//             </a>
//           </div>
//           <div>
//             <a href="#cart" className="text-lg text-white  hover:text-teal-200 mr-4">
//               <FontAwesomeIcon icon={faShoppingCart} />
//             </a>
//             <a href="#profile" className="text-lg text-white  hover:text-teal-200 mr-4">
//               <FontAwesomeIcon icon={faUser} />
//             </a>
//           </div>
//         </div>
//       </nav>
//     );
// };

// export default Navbar;
