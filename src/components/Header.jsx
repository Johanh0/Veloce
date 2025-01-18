import Button from "./Button";

const Header = () => {
  return (
    <header>
      <nav>
        <section>
          <a href="">Veloce</a>
        </section>
        <section>
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
        <section>
          <Button btnType="btn--transparent">Login</Button>
          <Button btnType="btn--secondary">Sign Up</Button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
