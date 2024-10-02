import { useEffect } from "react";
import Banner from "../../components/Banner/";
import data from "../../datas/accordion";
import Accordion from "../../components/Accordion";

function About() {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  const dataAbout = data;

  return (
    <>
      <Banner></Banner>
      <Accordion isList={false} accoValue={dataAbout} />
    </>
  );
}

export default About;
