import { useEffect } from "react";
import Banner from "../../components/Banner/";
import CardList from "../../components/CardList";

function Home() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <>
      <Banner>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <CardList></CardList>
    </>
  );
}

export default Home;
