
const ServicesCard = ({images, text, desc, button}) => {
  return (
    <div>
      <img className="services__img" src={images} alt="Services-img" />
      <h5 className="services__text">{text}</h5>
      <p className="services__desc">{desc}</p>
      <button className="services__btn" type="button">{button}</button>
    </div>
  )
}

export default ServicesCard
