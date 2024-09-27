import { accommodation } from "../../datas/accommodation";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import "../../styles/cardList.scss";

function CardList() {
  return (
    <section className="card-list">
      <ul>
        {accommodation.map(({ id, title, cover }) => (
          <li key={id}>
            <Link className="card" to={"/"}>
              <Card cover={cover} title={title} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default CardList;
