import { Link } from "react-router-dom";
import './Header.css'

export default function Header () {
    return (
        <header>
       {/* <nav class="navbar navbar-expand-md mb-4 text-bg-success sticky-top">
            <div class="container-fluid">
                <Link class="navbar-brand fs-3 ms-2" to="/">FABF</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse me-4 d-flex justify-content-end"  id="navbarCollapse">
                    <ul class="navbar-nav me-2 d-flex justify-content-end">
                        <li class="nav-item me-2">
                            <a class="nav-link text-light" href="#accueil">Accueil</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link text-light" href="#services">Services</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link text-light" href="#apropos">À propos</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="nav-link text-light" href="#contact">Contact</a>
                        </li>
                        
                    </ul>
                    <div class="d-flex justify-content-end">
                        <Link class="btn btn-light  me-2 mx-2" to="/login">Connexion</Link>
                        <Link class="btn btn-light" to="/register">Inscription</Link>
                    </div>
                </div>
            </div>
    </nav>  */}

<nav class="navbar navbar-expand-md bg-body-tertiary text-bg-success">
      <div class="container-fluid">
        <Link class="navbar-brand fs-3 me-2" to="/">FABF</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarNavAltMarkup">
          <div class="navbar-nav me-2">
            <a class="nav-link text-light"  href="/">Accueil</a>
            <a class="nav-link text-light" href="/#service">Services</a>
            <a class="nav-link text-light" href="/#apropos">A propos</a>
            <a class="nav-link text-light" href="/#contact">Contact</a>
          </div>
          <div class="d-flex justify-content-end" id="loter">
                        <Link class="btn btn-light  me-2 mx-2" to="/login">Connexion</Link>
                        <Link class="btn btn-light" to="/register">Inscription</Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
    );
}