import Banner from "../../components/Banner/";
import data from "../../datas/accordion";
import Accordion from "../../components/Accordion";
import backgroundImageAbout from "../../assets/header/about.jpg";

function About() {
  const dataAbout = data;

  return (
    <>
      <Banner isLabel={false} backgroundImage={backgroundImageAbout} />
      <Accordion isList={false} accoValue={dataAbout} />
    </>
  );
}

export default About;
