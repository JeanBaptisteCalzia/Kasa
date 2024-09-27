import "../../styles/card.scss";

function Card({ title, cover }) {
  return (
    <a className="card" href="#">
      <img src={cover} alt={`${title} cover`} />
      <h3>{title}</h3>
    </a>
  );
}
export default Card;
