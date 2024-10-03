import './Body.css';
import productBanner from '../../assets/banner.svg';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
const Body = () => {
  return (
    <div className="page-body">
      <div className="product-img">
        <img src={productBanner} alt="banner" className="img__banner" />
      </div>
      <div className="product-detail">
        <ProductDetail />
      </div>
    </div>
  );
};

export default Body;
