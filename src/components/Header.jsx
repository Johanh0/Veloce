import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import Button from "./Button";
import dropDownArrowSvg from "../assets/icons/drop-down-arrow.svg";
import "../css/components/header.css";

const Header = () => {
  const { isSignedIn, setIsSignedIn, user, setUser } = useContext(Context);

  return (
    <header>
      <nav className="nav">
        <section className="nav__logo">
          <Link to="/">Veloce</Link>
        </section>
        <section className="nav__links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rental">Rental</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </section>
        <section className="nav__options">
          {isSignedIn ? (
            <div className="nav__user">
              <div className="nav__user--profile">
                <img
                  src="http://localhost:3000/assets/profile/profile-default.svg"
                  alt=""
                />
              </div>
              <div className="nav__user--info">
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p>{user.email}</p>
              </div>
              <div className="nav__user--menu">
                <img src={dropDownArrowSvg} alt="" />
              </div>
            </div>
          ) : (
            <Button btnType="btn--transparent">
              <Link to="/auth">Login</Link>
            </Button>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Header;
