import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.svg'

export const PrimaryNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (e) => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='c-primary-nav u-flex u-justify-space-between u-align-center'>
      <div>
        <img src={Logo} alt="Insure Logo" />
      </div>
      <button className="c-link__button-mobile" onClick={handleClick}>
        <i className={`t-icon-${menuOpen ? 'close' : 'hamburger'}`}></i>
      </button>
      <ul className={`c-primary-navlist u-flex ${menuOpen ? '' : 'hidden'}`}>
        <li className="item"><Link to="#" className="c-link u-fw-700 u-uppercase">How we work</Link></li>
        <li className="item"><Link to="#" className="c-link u-fw-700 u-uppercase">Blog</Link></li>
        <li className="item"><Link to="#" className="c-link u-fw-700 u-uppercase">Account</Link></li>
        <li className="item"><Link to="#" className="c-link c-link__button-nav u-fw-700 u-uppercase">View plans</Link></li>
      </ul>
    </nav>
  )
}