import { Link } from "react-router-dom";
import "../css/components/productCard.css";
const ProductCard = ({ imgPath, carTitle }) => {
  return (
    <article className="product-card">
      <div className="product-card--img">
        <img src={imgPath} alt="" loading="lazy" />
      </div>
      <div className="product-card--title">
        <p>{carTitle}</p>
      </div>
      {/* <div className="product-card--details">
        <p></p>
      </div> */}
      <div className="product-card--price">
        <div className="price">
          <p>
            $1 <span> /day</span>
          </p>
        </div>
        <div className="link">
          <Link>Rent now</Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
