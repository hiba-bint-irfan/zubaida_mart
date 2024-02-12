import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import CategoriesSection from './components/categories';
import About from './components/pages/About';
import PulsesBeans from './components/pages/PulsesBeans';
import CartPage from './components/pages/Cart';
import { CartProvider } from './components/pages/CartContext';
import CheckoutPage from './components/pages/CheckOut';


const App = () => {
 return (
    <>
    <CartProvider>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<CategoriesSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/pulsesbean" element={<PulsesBeans />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
       </Routes>
       </CartProvider>
    </>
 );
};

export default App;