import React from 'react';
import './DeliveryInfo.css';
import truck from '../../assets/truck.svg';
import bag from '../../assets/bag.svg';

const DeliveryInfo = () => {
  return (
    <div className="delivery-info">
      <div className="delivery-section">
        <img src={truck} alt="truck" className="img__banner" />
        <div className="delivery-content">
          <h3>Free Delivery</h3>
          <p className="content-underline">
            Enter your Postal code for Delivery Availability
          </p>
        </div>
      </div>
      <div className="divide-section"></div>
      <div className="delivery-section">
        <img src={bag} alt="bag" className="img__banner" />
        <div className="delivery-content">
          <h3>Return Delivery</h3>
          <p>
            Free 30 days Delivery Return.{' '}
            <span className="content-underline">Detail</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
