import React from 'react';
import './css/Header.css';
import { homeImage } from './images';

const HomeSection = () => {
  const colorCode = '#2c2c54';
  return (
    <section className="home px-4 sm:px-6 md:px-8 2xl:px-24 pt-16 pb-16" id="home">
  <div className="slide-container active flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden">
        <div className="slide lg:w-1/2 lg:pr-8 min-h-full lg:min-h-screen flex items-center gap-4 p-4 lg:p-8">
          <div className="content py-2 flex-1 text-left">
            <h3 style={{ color: colorCode}} className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Zubaida Mart</h3>
            <p className="text-base lg:text-lg xl:text-xl mb-4 text-gray-600">
              Welcome to Zubaida Mart!
              Get yourself
            </p>
            <a href="#" className="btn bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-yellow-600">Add to Cart</a>
          </div>
        </div>
        <div className="image relative z-0">
  <img src={homeImage}  className="shoe w-full h-40 lg:h-full object-cover" alt="" />
</div>


      </div>
    </section>
  );
};

export default HomeSection;
