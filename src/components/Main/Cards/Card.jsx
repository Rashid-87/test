const Card = ({img, text, desc}) => {
  return (
    <div className="cards__card">
      <img className="cards__img" src={img} alt="cards-images" />
      <h6 className="cards__text">{text}</h6>
      <p className="cards__desc">{desc}</p>
    </div>
  );
};

export default Card;
