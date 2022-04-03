import { Link } from 'react-router-dom'

import { PrimaryNav } from '../components/PrimaryNav'

import Logo from '../assets/images/logo.svg'
import ImageIntroDesktop from '../assets/images/image-intro-desktop.jpg'
import ImageIntroMobile from '../assets/images/image-intro-mobile.jpg'
import IconSnappyProcess from '../assets/images/icons/icon-snappy-process.svg'
import IconAffordablePrices from '../assets/images/icons/icon-affordable-prices.svg'
import IconPeopleFirst from '../assets/images/icons/icon-people-first.svg'

export const Home = () => {
  return (
    <>
      <PrimaryNav />
      <main>
        <section className='c-hero-section u-bg-dark-violet'>
          <div className='container' style={{ padding: "100px 0 70px", "--gap": "18px" }}>
            <h2 className='u-ff-serif u-fs-700 u-fw-400 u-text-very-light-gray u-text-center'>Humanizing your insurance.</h2>
            <p className='u-fs-400 u-text-very-light-gray u-text-center' style={{ maxWidth: "33ch", lineHeight: "1.62" }}>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
            <Link to="#" className="c-link c-link__button u-fs-300 u-fw-700 u-uppercase" style={{ marginTop: "18px" }}>View plans</Link>
          </div>

          <picture>
            <source srcSet={ImageIntroDesktop} media="(min-width: 375px)" />
            <img src={ImageIntroMobile} alt="Intro family" />
          </picture>
        </section>
        <section className="c-we-are-different">
          <hr className='c-hr' />
          <h2 className="title u-ff-serif u-fs-700 u-fw-400 u-text-very-dark-violet u-text-center">We're different</h2>
          <div className="c-card-deck">
            <div className="c-card u-text-center">
              <div className='u-flex u-justify-center'>
                <img src={IconSnappyProcess} alt="" className='image' />
              </div>
              <div className='body'>
                <h3 className="title u-ff-serif u-fs-500 u-text-very-dark-violet">Snappy Process</h3>
                <p className="description u-ff-sans u-fs-400 u-text-dark-grayish-violet">Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
              </div>
            </div>
            <div className="c-card u-text-center">
              <div className='u-flex u-justify-center'>
                <img src={IconAffordablePrices} alt="" className='image' />
              </div>
              <div className='body'>
                <h3 className="title u-ff-serif u-fs-500 u-text-very-dark-violet">Affordable Prices</h3>
                <p className="description u-ff-sans u-fs-400 u-text-dark-grayish-violet">We don't want you to worry about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
              </div>
            </div>
            <div className="c-card u-text-center">
              <div className='u-flex u-justify-center'>
                <img src={IconPeopleFirst} alt="" className='image' />
              </div>
              <div className='body'>
                <h3 className="title u-ff-serif u-fs-500 u-text-very-dark-violet">People First</h3>
                <p className="description u-ff-sans u-fs-400 u-text-dark-grayish-violet">Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
              </div>
            </div>
          </div>
          <aside className='c-aside-block u-bg-dark-violet'>
            <h3 className='u-ff-serif u-fs-600 u-fw-400 u-text-very-light-gray u-text-center'>Find out more about how we work</h3>
            <Link to="#" className="c-link c-link__button u-fs-300 u-fw-700 u-uppercase">How we work</Link>
          </aside>
        </section>
      </main>
      <footer className="c-footer u-bg-very-light-gray">
        <div className='u-flex u-justify-center' style={{ padding: "90px 0 96px" }}>
          <img src={Logo} alt="" />
        </div>
        <div className="u-flex u-justify-center" style={{ "--gap": "1rem", marginBottom: "40px" }}>
          <a href="#" className="c-link__rrss"><i className="t-icon-facebook"></i></a>
          <a href="#" className="c-link__rrss"><i className="t-icon-twitter"></i></a>
          <a href="#" className="c-link__rrss"><i className="t-icon-pinterest"></i></a>
          <a href="#" className="c-link__rrss"><i className="t-icon-instagram"></i></a>
        </div>
        <hr />
        <div className="c-nav-footer u-flow">
          <div className="c-list-box u-flow" style={{ "--flow-space": "40px" }}>
            <h3 className="title u-uppercase u-text-dark-grayish-violet">Our Company</h3>
            <ul className="c-footer-list u-flow" style={{ "--flow-space": "1.25rem", marginTop: "2.5rem" }}>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">How we work</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Why insure?</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">View plans</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Reviews</Link></li>
            </ul>
          </div>
          <div className="c-list-box u-flow" style={{ "--flow-space": "40px" }}>
            <h3 className="title u-uppercase u-text-dark-grayish-violet">Help me</h3>
            <ul className="c-footer-list u-flow" style={{ "--flow-space": "1.25rem", marginTop: "2.5rem" }}>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">FAQ</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Privacy Policy</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Cookies</Link></li>
            </ul>
          </div>
          <div className="c-list-box u-flow" style={{ "--flow-space": "40px" }}>
            <h3 className="title u-uppercase u-text-dark-grayish-violet">Contact</h3>
            <ul className="c-footer-list u-flow" style={{ "--flow-space": "1.25rem", marginTop: "2.5rem" }}>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Sales</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Support</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Live chat</Link></li>
            </ul>
          </div>
          <div className="c-list-box u-flow" style={{ "--flow-space": "40px" }}>
            <h3 className="title u-uppercase u-text-dark-grayish-violet">Others</h3>
            <ul className="c-footer-list u-flow" style={{ "--flow-space": "1.25rem", marginTop: "2.5rem" }}>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Careers</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Press</Link></li>
              <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Licenses</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}