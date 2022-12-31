export default function Header() {
  return (
    <header className="header">
      <section className="header-secondary">
        <div className="header-secondary-inner mc-container">
          <div className="header-connect d-none d-lg-flex">
            <ul>
              <li>
                <a
                  href="http://youtube.com/c/monochrome/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with Monochrome on Youtube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://facebook.com/monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with Monochrome on Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://twitter.com/monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with Monochrome on Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://instagram.com/monochrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with Monochrome on Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="tel:+44 (0)10 2345 6789">
                  Call us +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls-mobile d-lg-none">
            <header>
              <h1 className="header-controls-title">Monochrome</h1>
            </header>
            <div className="controls">
              <ul>
                <li className="user-controls">
                  <a href="" title="My account">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </li>

                <li className="favourites-controls">
                  <a href="" title="Favourites">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </li>

                <li className="cart-controls">
                  <a href="" title="Cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-controls-desktop d-none d-lg-flex">
            <ul>
              <li>
                <form action="/">
                  <input
                    className="site-search"
                    type="search"
                    name="search"
                    placeholder="Search"
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </form>
              </li>

              <li className="user-controls">
                <a href="" title="My account">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>

              <li className="favourites-controls">
                <a href="" title="Favourites">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>

              <li className="cart-controls">
                <a href="" title="Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="header-primary d-none d-lg-flex">
        <nav className="nav-primary-desktop mc-container">
          <ul>
            <li>
              <a href="" title="New Arrivals">
                New Arrivals
              </a>
            </li>

            <li>
              <a href="" title="Brands">
                Brands
              </a>
            </li>

            <li>
              <a href="" title="Men's">
                Men's
              </a>
            </li>

            <li>
              <a href="" title="Women's">
                Women's
              </a>
            </li>

            <li>
              <a href="" title="Accesories">
                Accesories
              </a>
            </li>

            <li>
              <a href="" title="Lookbook">
                Lookbook
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <nav className="nav-primary-mobile mc-container d-lg-none">
        <ul>
          <li>
            <a href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li>
            <form action="/">
              <input
                className="site-search"
                type="search"
                name="search"
                placeholder="Search"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </form>
          </li>
        </ul>
      </nav>

      <nav className="new-collection d-lg-none">
        <button className="button button-secondary button-small">New in</button>
      </nav>
    </header>
  );
}
