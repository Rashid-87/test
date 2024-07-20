import './services.scss';
import services from './../../../../src/img/services/services.png'
import services1 from './../../../../src/img/services/services1.png'
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <div className='services'>
      <div className="container">
        <h3 className="services__title">services</h3>
        <h4 className="services__subtitle">This is some text inside of a div block.</h4>
        <div className="services__wrapper">
          <ServicesCard images={services} text='SERVICES one' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.' button='Learn more'/>
          <ServicesCard images={services1} text='SERVICES two' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.' button='Learn more'/>
        </div>
      </div>
    </div>
  )
}

export default Services
