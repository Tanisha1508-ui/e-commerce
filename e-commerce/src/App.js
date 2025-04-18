import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Footer from './components/Footer';
import './css/Style.css';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navigation />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
