import { useContext } from "react";
import { Context } from "../App";
import Button from "./Button";
import "../css/components/header.css";

const Header = () => {
  const { isSignedIn, setIsSignedIn, user, setUser } = useContext(Context);

  return (
    <header>
      <nav className="nav">
        <section className="nav__logo">
          <a href="">Veloce</a>
        </section>
        <section className="nav__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/rental">Rental</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </section>
        <section className="nav__options">
          {isSignedIn ? (
            <p>
              {user.firstName} {user.lastName}
            </p>
          ) : (
            <Button btnType="btn--transparent">Login</Button>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Header;
