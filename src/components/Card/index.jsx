import "../../styles/card.scss";

function Card({ title, cover }) {
  return (
    <>
      <img src={cover} alt={`${title} cover`} />
      <h3>{title}</h3>
    </>
  );
}
export default Card;
