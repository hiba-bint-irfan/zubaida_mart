import React from "react";
import Navbar from '../Navbar';
import HomeSection from "../HomeSection";
import Services from "../Services";
import CategoriesSection from "../categories";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeSection/>
      <Services/>
      < CategoriesSection/>
      <Footer/>
    </div>
  );
};

export default Home;
