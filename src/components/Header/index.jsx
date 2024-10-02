import "./nav.scss";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
