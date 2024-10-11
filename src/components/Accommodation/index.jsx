import React from "react";
import { useParams } from "react-router-dom";
import "./accommodation.scss";
import Accordion from "../../components/Accordion";
import Slideshow from "../../components/Slideshow";
import StarRating from "../../components/Rating";
import { useFetch } from "../../utils/hooks";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

function Accommodation() {
  const params = useParams();
  const accommodationId = params.id;

  const { data, error, isLoading } = useFetch("../../accommodation.json");

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  const currentAccommodation =
    data && data.filter((acco) => acco.id === accommodationId);

  return (
    <section className="accommodation-page">
      {currentAccommodation.map(
        ({ id, title, location, host, rating, pictures, tags }) => (
          <div key={id}>
            <Slideshow pictures={pictures} />
            <div className="content">
              <div className="content__info">
                <h1>{title}</h1>
                <p>{location}</p>
                <ul>
                  {tags.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="content__user">
                <div className="content__user-host">
                  <p>{host.name}</p>
                  <img src={host.picture} alt={host.name} />
                </div>
                <div className="content__user-rating">
                  <p>
                    <StarRating rating={rating} />
                  </p>
                </div>
              </div>
            </div>
            <div className="content-bottom">
              <Accordion
                accoTitle="Description"
                isList={false}
                accoValue={currentAccommodation}
              />
              <Accordion
                accoTitle="Equipements"
                isList={true}
                accoValue={currentAccommodation}
              />
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default Accommodation;
