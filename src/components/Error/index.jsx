import "./error.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Error() {
  useEffect(() => {
    document.body.classList.add("error-page");
    return () => {
      document.body.classList.remove("error-page");
    };
  }, []);

  return (
    <div className="content">
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
