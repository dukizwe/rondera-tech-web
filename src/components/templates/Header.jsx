
import '../../css/app/header.scss'

export default function Header() {
          return (
          <header>
                    <div className="navbar-left-side" /* className="container d-flex justify-content-between" */>
                              <a href="/" className="site-brand"  /* className="navbar-brand d-flex align-items-center" */>
                                        <img src='/images/icon.png' />
                              </a>
                              <div className="searchbar">
                                        <div className="icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                  </svg>
                                        </div>
                                        <input type="search" className="search-form" placeholder="Rondera..."/>
                              </div>
                    </div>
                    <nav className="navbar-right-side">
                              <a href="/posts"  className="link">Inscription</a>
                              <div className="item connection">
                                        <a href="/login" className="to-login">Connexion</a>
                              </div>
                    </nav>
          </header>
          )
}
