import React from "react";
import { useFetch } from "../../utils/hooks";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import "./cardList.scss";

function CardList() {
  const { data, error, isLoading } = useFetch("accommodation.json");

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="card-list">
        <ul>
          {data &&
            data.map(({ id, title, cover }) => (
              <li key={id}>
                <Link className="card" to={`/accommodation/${id}`}>
                  <Card cover={cover} title={title} />
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
export default CardList;
