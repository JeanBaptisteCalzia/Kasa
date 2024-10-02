import Banner from "../../components/Banner/";
import CardList from "../../components/CardList";
import backgroundImageHome from "../../assets/header/about.jpg";

function Home() {
  return (
    <>
      <Banner isLabel={true} backgroundImage={backgroundImageHome}>
        <h1>
          Chez vous, <br className="show-for-mobile-only" />
          partout et ailleurs
        </h1>
      </Banner>
      <CardList />
    </>
  );
}

export default Home;
