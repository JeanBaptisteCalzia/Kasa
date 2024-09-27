import Banner from "../../components/Banner/";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  return <Banner></Banner>;
}

export default About;
