import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        {product.onSale && <span className="modern-badge">SALE</span>}
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-details">
        <p className="brand-name">{product.brand}</p>
        <h3 className="product-title">{product.name}</h3>
        
        <div className="stars-row">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon 
              key={i} 
              icon={faStar} 
              className={i < product.rating ? "star-active" : "star-inactive"} 
            />
          ))}
        </div>

        <div className="price-box">
          <span className="price-new">${product.price}</span>
          {product.oldPrice && <span className="price-was">${product.oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;