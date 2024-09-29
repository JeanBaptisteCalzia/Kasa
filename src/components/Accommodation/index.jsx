import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/accommodation.scss";
import { accommodation } from "../../datas/accommodation";
import Accordion from "../../components/Accordion";

function Accommodation() {
  useEffect(() => {
    document.body.classList.add("accommodation-page");
    return () => {
      document.body.classList.remove("accommodation-page");
    };
  }, []);

  const params = useParams();
  let accommodationType = params.id;

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
      };
      reduced.push(datas);
    }
  });

  return (
    <>
      <section>
        {reduced.map(
          ({
            index,
            title,
            cover,
            location,
            hostName,
            hostPicture,
            rating,
          }) => (
            <>
              <img src={cover} alt={`${title} cover`} />
              <div className="content">
                <div className="content__info">
                  <h1>{title}</h1>
                  <p>{location}</p>
                  <ul>
                    {reduced.map(({ tags }) => (
                      <li key={`${tags}-${index}`}>{tags}</li>
                    ))}
                  </ul>
                </div>
                <div className="content__user">
                  <div>
                    <p>{hostName}</p>
                    <img src={hostPicture} alt={hostName} />
                  </div>
                  <p>{rating}</p>
                </div>
              </div>
              <div className="content-bottom">
                <Accordion accoType="description" accoValue={reduced} />
                <Accordion accoType="equipments" accoValue={reduced} />
              </div>
            </>
          )
        )}
      </section>
    </>
  );
}

export default Accommodation;
