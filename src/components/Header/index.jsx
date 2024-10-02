import "./nav.scss";
import logo from "../../assets/logo/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo Kasa" />
      </NavLink>
      <div>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/about"
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
