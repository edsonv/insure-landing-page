
import { Link } from 'react-router-dom';

export const DesignSystem = () => {
  const colorBox1 = { padding: "3rem 1rem 1rem" }

  return (
    <main className="u-container u-flow">
      <header>
        <h1 className="u-ff-serif u-text-very-dark-violet u-uppercase">Design System</h1>
      </header>
      <section id="color" className="u-flow" style={{ "margin": "4rem 0" }}>
        <h2 className="u-ff-serif u-text-very-dark-violet u-uppercase">Color</h2>
        <div className="u-flex">
          <div className="u-flow" style={{ flexGrow: 1 }}>
            <div className="u-bg-dark-violet u-text-very-light-gray u-border-light u-uppercase" style={colorBox1}>#2d2640</div>
            <p className="u-text-dark-violet"><span>RGB</span> 45, 38, 64</p>
            <p className="u-text-dark-violet"><span>HSL</span> 256, 25%, 20%</p>
          </div>
          <div className="u-flow" style={{ flexGrow: 1 }}>
            <div className="u-bg-grayish-blue u-text-very-light-gray u-border-dark u-uppercase" style={colorBox1}>#95a9c6</div>
            <p className="u-text-dark-violet"><span>RGB</span> 149, 169, 198</p>
            <p className="u-text-dark-violet"><span>HSL</span> 216, 30%, 68%</p>
          </div>
        </div>
        <div className="u-flex">
          <div className="u-flow" style={{ flexGrow: 1 }}>
            <div className="u-bg-very-dark-violet u-text-very-light-gray u-border-light u-uppercase" style={colorBox1}>#2b272f</div>
            <p className="u-text-dark-violet"><span>RGB</span> 43, 39, 47</p>
            <p className="u-text-dark-violet"><span>HSL</span> 270, 9%, 17%</p>
          </div>
          <div className="u-flow" style={{ flexGrow: 1 }}>
            <div className="u-bg-dark-grayish-violet u-text-very-light-gray u-border-dark u-uppercase" style={colorBox1}>#837d87</div>
            <p className="u-text-dark-violet"><span>RGB</span> 131, 125, 135</p>
            <p className="u-text-dark-violet"><span>HSL</span> 276, 4%, 51%</p>
          </div>
          <div className="u-flow" style={{ flexGrow: 1 }}>
            <div className="u-bg-very-light-gray u-text-very-dark-violet u-border-dark u-uppercase" style={colorBox1}>#fafafa</div>
            <p className="u-text-dark-violet"><span>RGB</span> 250, 250, 250</p>
            <p className="u-text-dark-violet"><span>HSL</span> 0, 0%, 98%</p>
          </div>
        </div>
      </section>
      <section id="typography" className="u-flow" style={{ margin: "4rem 0" }}>
        <h2 className="u-ff-serif u-text-very-dark-violet u-uppercase">Typography</h2>
        <div className="u-flex">
          <div className="u-flow" style={{ flexBasis: "100%", "--flow-space": "4rem" }}>
            <div>
              <p className="u-text-very-dark-violet">Heading 1 - DM Serif Display - 50px - 0.96 Line Height</p>
              <p className="u-ff-serif u-fs-700 u-text-very-dark-violet">Humanizing your insurance.</p>
            </div>
            <div>
              <p className="u-text-very-dark-violet">Heading 2 - DM Serif Display - 40px - 0.98 Line Height</p>
              <p className="u-ff-serif u-fs-600 u-text-very-dark-violet">Find out more about how we work</p>
            </div>
            <div>
              <p className="u-text-very-dark-violet">Heading 3 - DM Serif Display - 28px</p>
              <p className="u-ff-serif u-fs-500 u-text-very-dark-violet">Snappy Process</p>
            </div>
          </div>
          <div className="u-flow" style={{ flexBasis: "100%", "--flow-space": "4rem" }}>
            <div>
              <p className="u-text-very-dark-violet">Description - Karla - 16px - 1.60 Line Height</p>
              <p className="u-ff-sans u-fs-400 u-text-very-dark-violet">Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
            </div>
            <div>
              <p className="u-text-very-dark-violet">Call to action - Karla - 10px</p>
              <p className="u-ff-sans u-fs-300 u-fw-700 u-uppercase u-text-very-dark-violet">How we work</p>
            </div>
            <div>
              <p className="u-text-very-dark-violet">Body text</p>
              <p className="u-text-very-dark-violet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus dolorum explicabo voluptate commodi ut corporis ab, rem nemo voluptatibus provident doloribus! Iste quae quod quibusdam praesentium eaque optio excepturi.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="interactive-elements" className="u-flow">
        <h2 className="u-ff-serif u-text-very-dark-violet u-uppercase">Interactive Elements</h2>

        <div className="u-flex">
          <div className="u-flow" style={{ flexBasis: "100%", "--flow-space": "0" }}>
            <nav>
              <ul className="c-primary-nav u-flex u-justify-center">
                <li className="c-primary-nav--item"><Link to="#" className="c-link u-fs-300 u-fw-700 u-uppercase">How we work</Link></li>
                <li className="c-primary-nav--item"><Link to="#" className="c-link u-fs-300 u-fw-700 u-uppercase">Blog</Link></li>
                <li className="c-primary-nav--item"><Link to="#" className="c-link u-fs-300 u-fw-700 u-uppercase">Account</Link></li>
                <li className="c-primary-nav--item"><Link to="#" className="c-link c-link__button-nav u-fs-300 u-fw-700 u-uppercase">View plans</Link></li>
              </ul>
            </nav>
            <p className="u-text-center">Primary Navigation Menu - Desktop</p>
          </div>
          <div className="u-flow" style={{ flexBasis: "100%", "--flow-space": "3rem" }}>
            <button className="c-link__button-mobile u-d-block u-m-auto"><i className="t-icon-hamburger"></i></button>
            <p className="u-text-center">Menu Button - Mobile</p>
          </div>
          <div className="u-flow" style={{ flexBasis: "100%", "--flow-space": "3rem" }}>
            <button className="c-link__button-mobile u-d-block u-m-auto"><i className="t-icon-close"></i></button>
            <p className="u-text-center">Menu Close Button - Mobile</p>
          </div>
        </div>

        <div className="u-flex" style={{ "--gap": "4rem", marginTop: "4rem" }}>
          <div className="u-flow u-bg-dark-violet" style={{ padding: "3rem 3rem 1rem", "--flow-space": "2rem", flexBasis: "100%" }}>
            <Link to="#" className="c-link c-link__button u-fs-300 u-fw-700 u-uppercase">View plans</Link>
          </div>
          <div className="u-flow" style={{ padding: "3rem 3rem 1rem", "--flow-space": "2rem", flexBasis: "100%" }}>
            <div className="u-flex u-justify-center" style={{ "--gap": "1rem" }}>
              <a href="#" className="c-link"><i className="t-icon-facebook"></i></a>
              <a href="#" className="c-link"><i className="t-icon-twitter"></i></a>
              <a href="#" className="c-link"><i className="t-icon-pinterest"></i></a>
              <a href="#" className="c-link"><i className="t-icon-instagram"></i></a>
            </div>
          </div>
          <div className="u-flow" style={{ flexBasis: "100%" }}>
            <div className="u-flex">
              <div className="u-flow" style={{ "--flow-space": "40px" }}>
                <h3 className="u-uppercase u-text-dark-grayish-violet">Our Company</h3>
                <ul className="c-footer-list u-flow" style={{ "--flow-space": "1.25rem", marginTop: "2.5rem" }}>
                  <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">How we work</Link></li>
                  <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Why insure?</Link></li>
                  <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">View plans</Link></li>
                  <li className="c-footer-list__item"><Link to="" className="c-link c-link__footer uff-sans u-fs-300 u-fw-700 u-no-decoration u-uppercase">Reviews</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main >
  )
}