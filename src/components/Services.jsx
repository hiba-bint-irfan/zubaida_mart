import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndo, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './css/Services.css';
const ServiceSection = () => {
    const colorCode = '#2c2c54';
  return (
    
    <section className="service px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-8 pb-16">
      <div className="box-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="box">
          <i className="fas fa-shipping-fast">
          <FontAwesomeIcon icon={faShippingFast} />
          </i>
          <h3 style={{ color: colorCode}}>Fast Delivery</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
        </div>
        <div className="box">
          <i className="fas fa-undo">
          <FontAwesomeIcon icon={faUndo} />
          </i>
          <h3 style={{ color: colorCode }}>10 Days Replacements</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
        </div>
        <div className="box">
          <i className="fas fa-headset">
          <FontAwesomeIcon icon={faHeadset} />
          </i>
          <h3 style={{ color: colorCode }}>24 x 7 Support</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;



// const Service = () => {
//   return (
//     <section className="service">
//       <div className="flex flex-wrap gap-6 bg-gray-100 border border-gray-200 rounded p-4 lg:p-8">
//         <div className="flex-1 min-w-0">
//           <i className="faShippingFast text-4xl text-orange">
//             <FontAwesomeIcon icon={faShippingFast} />
//           </i>
//           <h3 className="text-2xl text-black pt-4">Fast Delivery</h3>
//           <p className="text-lg text-gray-600 py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
//         </div>
//         <div className="flex-1 min-w-0">
//           <i className="faUndo text-4xl text-orange">
//             <FontAwesomeIcon icon={faUndo} />
//           </i>
//           <h3 className="text-2xl text-black pt-4">10 Days Replacements</h3>
//           <p className="text-lg text-gray-600 py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
//         </div>
//         <div className="flex-1 min-w-0">
//           <i className="faHeadset text-4xl text-orange">
//             <FontAwesomeIcon icon={faHeadset} />
//           </i>
//           <h3 className="text-2xl text-black pt-4">24x7 Support</h3>
//           <p className="text-lg text-gray-600 py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;
