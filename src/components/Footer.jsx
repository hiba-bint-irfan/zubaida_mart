import React from "react";
import './css/Footer.css';

const Footer = () => {
  return (
    <section className="footer bg-gray-800 text-white py-8">
      <div className="box-container ">
        <div className="box text-center mb-4 md:mb-0">
            <h3 className="text-2x0 font-bold mb-4">Follow Us</h3>
            <div className="links flex justify-center space-x-4">
                    <a href="#" className="hover:underline">Facebook</a>
                    <a href="#" className="hover:underline">Twitter</a>
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
            </div>
            </div>

            <div className="credit text-1">
                Created by <span className="font-bold">Hiba Irfan</span> | All rights reserved
            </div>
      </div>
    </section>
  );
};

export default Footer;
