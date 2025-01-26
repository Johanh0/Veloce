import { Link } from "react-router-dom";
import Button from "./Button";
import "../css/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="reveal--content">
        <section className="footer__contact">
          <p>Book your next great experience.</p>
          <h3>Get in Touch!</h3>
          <Link>
            <Button>Contact Us</Button>
          </Link>
          <p>&copy; {`${currentYear} Veloce`}</p>
        </section>
        <section className="footer__links">
          <div className="footer__links--logo">
            <p>Veloce</p>
          </div>
          <div className="footer__links--links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Rental</Link>
              </li>
              <li>
                <Link to="/">Contac Us</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
