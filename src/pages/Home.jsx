import Header from "../components/Header";
import Button from "../components/Button";
import BrandsLogosSection from "../components/pages/home/BrandsLogosSection";
import StepsSection from "../components/pages/home/StepsSection";
import DetailSection from "../components/pages/home/DetailSection";
import RentalsSection from "../components/pages/home/RentalsSection";
import Footer from "../components/Footer";
import blueCarSvg from "../assets/images/blue-car.svg";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__left">
            <div>
              <h1>
                Find, book, and rental car in <span>Easy</span> steps
                <span>.</span>
              </h1>
            </div>
            <div>
              <p>Get a car wherever and whenever you need! Check our catalog</p>
            </div>
            <div>
              <Button>Catalog</Button>
            </div>
          </div>
          <div className="hero__right">
            <img src={blueCarSvg} alt="blue car image" />
          </div>
        </section>
        <BrandsLogosSection />
        <StepsSection />
        <DetailSection />
        <RentalsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
