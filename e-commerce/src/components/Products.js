// Name: Tanisha Jogani

import React from 'react';
import product1 from '../images/mobile1.png'; // Import product images
import product2 from '../images/mobile2.png';
import product3 from '../images/mobile3.png';
import '../css/Style.css'; // Import styles for the products section

function Products() {
    return (
        <div className="products-section">
            {/* products section */}
            <h2 className="text-center">Our Products</h2>

            {/* showcasing three products */}
            <div className="product-grid">
                {/* product cards */}
                <div className="product-card">
                    <img src={product1} alt="Phone 1" />
                    <h4>iPhone 13</h4>
                    <p>Powerful battery & stunning display.</p>
                </div>
                <div className="product-card">
                    <img src={product2} alt="Phone 2" />
                    <h4>iPhone 14</h4>
                    <p>Top-tier performance with sleek design.</p>
                </div>
                <div className="product-card">
                    <img src={product3} alt="Phone 3" />
                    <h4>iPhone 16</h4>
                    <p>Perfect for photography lovers.</p>
                </div>
            </div>
        </div>
    );
}

export default Products;
