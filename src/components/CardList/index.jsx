import { accommodation } from "../../datas/accommodation";
import Card from "../../components/Card";
import "../../styles/cardList.scss";

function CardList() {
  return (
    <section className="card-list">
      <ul>
        {accommodation.map(({ id, title, cover }) => (
          <li key={id}>
            <Card cover={cover} title={title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default CardList;
