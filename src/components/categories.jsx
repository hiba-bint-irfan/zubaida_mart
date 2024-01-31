import React from 'react';
import { pulses, beverages, oil, spices, tea, peronalcare, snackes, household, sugar } from './images';
import './css/Category.css';

const CategoriesSection = () => {
  return (
    <section className="categories">
      <h1 className="heading" data-aos="fade-up">
        Categories <span>products</span>
      </h1>
      <div className="box-container">

        <div className="box">
          <a href="">
            <img src={pulses} alt="" className="img" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Pulses and Beans</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={snackes} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Snacks</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={household} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Households</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={peronalcare} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Personal Care</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={beverages} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Beverages</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={spices} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Spices</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={sugar} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Sugar</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={oil} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Oil & Ghee</h3></a>
          </div>
        </div>

        <div className="box">
          <a href="#">
            <img src={tea} alt="" className="" />
          </a>
          <div className="content">
            <a href="#"><h3 className="text-lg font-semibold">Tea</h3></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;
