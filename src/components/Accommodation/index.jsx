import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./accommodation.scss";
import { accommodation } from "../../datas/accommodation";
import Accordion from "../../components/Accordion";
import Slideshow from "../../components/Slideshow";
import StarRating from "../../components/Rating";

function Accommodation() {
  const navigate = useNavigate();
  const params = useParams();
  let accommodationType = params.id;
  let accommodationId = false;

  useEffect(() => {
    if (accommodationType !== String(accommodationId)) {
      navigate("/404");
    }
  }, [accommodationType, accommodationId, navigate]);

  const reduced = [];
  accommodation.forEach(function (option) {
    if (option.id === accommodationType) {
      let datas = {
        id: option.id,
        title: option.title,
        cover: option.cover,
        location: option.location,
        tags: option.tags,
        hostName: option.host.name,
        hostPicture: option.host.picture,
        rating: option.rating,
        description: option.description,
        equipments: option.equipments,
        pictures: option.pictures,
      };
      reduced.push(datas);
    }
  });

  accommodationId = reduced.map((id) => id.id);

  return (
    <section className="accommodation-page">
      {reduced.map(
        ({
          id,
          title,
          location,
          hostName,
          hostPicture,
          rating,
          pictures,
          tags,
        }) => (
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
                  <p>{hostName}</p>
                  <img src={hostPicture} alt={hostName} />
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
                accoValue={reduced}
              />
              <Accordion
                accoTitle="Equipements"
                isList={true}
                accoValue={reduced}
              />
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default Accommodation;
