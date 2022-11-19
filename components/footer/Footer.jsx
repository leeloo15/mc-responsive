export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner-container">
        <section className="footer-contact">
          <ul>
            <li>
              <a href="tel:+4401023456789" title="Call us">
                call us <br></br> +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:monochrome@yahoo.com" title="email customer care">
                email customer care
              </a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav">
          <h1>How can we help?</h1>

          <div className="footer-nav-wrapper">
            <ul>
              <li>
                <a href="http://" title="style & fit advice">
                  style & fit advice
                </a>
              </li>

              <li>
                <a href="http://" title="faqs">
                  faqs
                </a>
              </li>

              <li>
                <a href="http://" title="delivery">
                  delivery
                </a>
              </li>

              <li>
                <a href="http://" title="exchanges & returns">
                  exchanges & returns
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="http://" title="about us">
                  about us
                </a>
              </li>

              <li>
                <a href="http://" title="careers">
                  careers
                </a>
              </li>

              <li>
                <a href="http://" title="affiliates">
                  affiliates
                </a>
              </li>

              <li>
                <a href="http://" title="advertising">
                  advertising
                </a>
              </li>
            </ul>
          </div>

          <ul className="user-information">
            <li>
              <a href="http://" title="terms & conditions">
                terms & conditions
              </a>
            </li>

            <li>
              <a href="http://" title="privacy & cookies">
                privacy & cookies
              </a>
            </li>
          </ul>
        </nav>

        <section className="footer-connect">
          <div className="footer-newsletter">
            <h1>Let's connect</h1>

            <form action="">
              <label htmlFor="email" className="d-block d-lg-none mb-2">
                Be the first to receive exclusive offers
              </label>
              <label htmlFor="email" className="d-none d-lg-block fs-4 mb-2">
                sign up for our newsletter
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </form>

            <div className="crazy-design-wrapper">
              <button className="button button-primary button-small">
                Submit
              </button>

              <div className="gdpr-consent-wrapper">
                <input type="checkbox" name="gdpr-consent" id="gdpr-consent" />
                <label htmlFor="gdpr-consent">
                  I agree with{' '}
                  <a href="http://" title="Privacy policy">
                    Privacy Policy
                  </a>{' '}
                  and i want to receive emails from Monochrome
                </label>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h1>We are highly likeable</h1>

            <ul>
              <li>
                <a
                  href="http://youtube.com/c/monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Monochrome on Youtube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://facebook.com/monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Monochrome on Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://twitter.com/monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Monochrome on Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://instagram.com/monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Monochrome on Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}
