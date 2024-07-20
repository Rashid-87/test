import './cards.scss';
import img from './../../../../src/img/cards/cards(1).svg'
import img2 from './../../../../src/img/cards/cards(2).svg'
import img3 from './../../../../src/img/cards/cards(3).svg'
import Card from './Card';

const Cards = () => {
  return (
    <section className='cards'>
      <div className="container">
        <h3 className="cards__title">what we do</h3>
        <h5 className="cards__subtitle">This is some text inside of a div block.</h5>
        <div className="cards__wrapper">
          <Card img={img} text='Graphic Design' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'/>
          <Card img={img2} text='Awesome code' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'/>
          <Card img={img3} text='free template' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'/>
        </div>
      </div>
    </section>
  )
}

export default Cards
