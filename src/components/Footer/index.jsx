import "./footer.scss";
import logo from "../../assets/logo/logo-secondary.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/" className="logo">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <small>
        © 2020 Kasa. All <br className="show-for-mobile-only" />
        rights reserved
      </small>
    </footer>
  );
}

export default Footer;
