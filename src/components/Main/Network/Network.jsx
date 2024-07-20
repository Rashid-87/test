import './network.scss';
import NetworkCard from './NetworkCard';
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaWebflow } from "react-icons/fa6";

const Network = () => {
  return (
    <div className='network'>
      <div className="container">
        <div className="network__wrapper">
        <NetworkCard title='about velocity' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'/>
        <NetworkCard title='useful links' text='Phasellus gravida semper nisi Suspendisse nisl elit Dellentesque habitant morbi Etiam sollicitudin ipsum'/>
        <div className="network__card">
        <h3 className="network__title">social</h3>
          <ul className="network__menu">
            <li className="network__item"><FaTwitter /><a className="network__link" href="/">Twitter</a></li>
            <li className="network__item"><IoLogoFacebook /> <a className="network__link" href="/">Facebook</a></li>
            <li className="network__item"><FaPinterestP /> <a className="network__link" href="/">Pinterest</a></li>
            <li className="network__item"><TiSocialGooglePlus /><a className="network__link" href="/">Google </a></li>
            <li className="network__item"><FaWebflow /> <a className="network__link" href="/">Webflow</a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Network
