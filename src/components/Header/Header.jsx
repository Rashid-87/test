import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="header__wrapp">
          <h1 className="header__title">Velocity</h1>
          <nav className='header__nav'>
            <ul className='header__menu'>
              <li className='header__item'><a className='header__link header__active' href="/">Home</a></li>
              <li className='header__item'><a className='header__link' href="/">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header

