
const NetworkCard = ({title, text}) => {
  return (
    <div className="network__card">
      <h3 className="network__title">{title}</h3>
      <p className="network__text">{text}</p>
    </div>
  )
}

export default NetworkCard
