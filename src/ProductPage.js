import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        alert(`${quantity} item(s) added to cart!`);
    };

    return (
        <div className="product-page">
            <img src="https://via.placeholder.com/600x400" alt="Product" className="product-image" />
            <div className="product-details">
                <h1>Product Name</h1>
                <p>Price: $99.99</p>
                <p>Description: This is a high-quality product.</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductPage;