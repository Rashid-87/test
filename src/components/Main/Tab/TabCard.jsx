
const TabCard = ({img, text, desc}) => {
  return (
    <>
      <img className="tab__img" src={img} alt="tab-images" />
      <h4 className="tab__text">{text}</h4>
      <p className="tab__desc">{desc}</p>
    </>
  )
}

export default TabCard
