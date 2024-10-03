import React from 'react';
import './ProductPriceRating.css';

const ProductPriceRating = ({ price, rating, reviews, recommendation }) => {
  return (
    <div className="product-price-rating">
      <div className="price-container">
        <span className="current-price">${price.toFixed(2)}</span>
        <span className="original-price">${price.toFixed(2)}</span>
      </div>
      <div className="rating-section">
      <div className="rating-container">
        <div className="star-rating">
          <span className="star">★</span>
          <span className="rating-value">{rating.toFixed(1)}</span>
        </div>
        <div className="reviews-count">
          <span className="review-icon">💬</span>
          <span className="count">{reviews} Reviews</span>
        </div>
      </div>
      <div className="recommendation">
        <span className="recommendation-percentage">{recommendation}%</span>
        <span className="recommendation-text"> of buyers have recommended this.</span>
      </div>
      </div>
    </div>
  );
};

export default ProductPriceRating;