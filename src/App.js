import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import CategoriesSection from './components/categories';
import About from './components/pages/About';
import PulsesBeans from './components/pages/PulsesBeans';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<CategoriesSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/pulsesbean" element={<PulsesBeans />} />
       </Routes>
    </>
 );
};

export default App;