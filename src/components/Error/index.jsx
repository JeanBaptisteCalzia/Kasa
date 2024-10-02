import "./error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>
        Oups! La page que <br className="show-for-mobile-only" />
        vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;
