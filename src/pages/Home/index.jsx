import Banner from "../../components/Banner/";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <Banner>
      <h1>Chez vous, partout et ailleurs</h1>
    </Banner>
  );
}

export default Home;
