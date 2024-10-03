import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import ProductPriceRating from '../ProductPriceRating/ProductPriceRating';
import './ProductDetail.css';
import catalog from '../../assets/catalog.svg';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-heading">
        <div className="text">
          <div className="name">Embrace Sideboard</div>
          <div className="designer">Teixeira Design Studio</div>
        </div>
        <div className="icons"></div>
      </div>
      <div className="section-divide"></div>
      <div>
        <ProductPriceRating
          price={71.56}
          rating={4.8}
          reviews={67}
          recommendation={93}
        />
      </div>
      <div className="section-divide"></div>
      <div className="btn">
        <div className="quantity-btn">
          <span className="minus">-</span>
          <span className="quantity">5</span>
          <span className="plus">+</span>
        </div>
        <div className="addtocart-btn">Add to Cart</div>
      </div>
      <div className="product-catalog">
        <img className="catalog-img" src={catalog} />
        <img className="catalog-img" src={catalog} />
        <img className="catalog-img" src={catalog} />
        <img className="catalog-img" src={catalog} />
      </div>
      <div>
        <DeliveryInfo />
      </div>
    </div>
  );
};

export default ProductDetail;
