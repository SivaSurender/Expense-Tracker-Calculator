import "./Card.css";
const Card = function ({ children, className }) {
  const cardClass = "card " + className;
  return <div className={cardClass}>{children}</div>;
};

export default Card;
