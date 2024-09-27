import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  );
}

export default Header;
