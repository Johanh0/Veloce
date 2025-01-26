import { Link } from "react-router-dom";
import Button from "../../Button";
import ProductCard from "../../ProductCard";
import "../../../css/pages/home/rentalsSection.css";

const RentalsSection = () => {
  return (
    <section className="rentals">
      <div className="rentals__title">
        <p>POPULAR RENTAL DEALS</p>
        <h3>Most popular cars rental</h3>
      </div>
      <div className="rentals__grid">
        <ProductCard
          imgPath="http://localhost:3000/assets/cars/rs5.png"
          carTitle="Audi RS5"
        />
        <ProductCard
          imgPath="http://localhost:3000/assets/cars/mc20-cielo.png"
          carTitle="Maserati MC20"
        />
        <ProductCard
          imgPath="http://localhost:3000/assets/cars/granturismo.png"
          carTitle="Maserati GranTurismo"
        />
        <ProductCard
          imgPath="http://localhost:3000/assets/cars/mclanren-720.png"
          carTitle="McLaren 720s "
        />
      </div>
      <div className="rentals__cta">
        <Link to="/catalog">
          <Button>Show All Vehicles</Button>
        </Link>
      </div>
    </section>
  );
};

export default RentalsSection;
