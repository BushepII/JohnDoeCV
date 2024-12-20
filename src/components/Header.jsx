import { Link } from "react-router-dom";
import '../style/components_style/Header.css';

const Header = () => {

  return (
    <header className='container-fluid px-0'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>

                <a href="#" className='navbar-brand'>JOHN DOE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link active' aria-current="page">ACCUEIL</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className='nav-link' aria-current="page">SERVICES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/realisations" className='nav-link' aria-current="page">RÉALISATIONS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/blog" className='nav-link' aria-current="page">BLOG</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className='nav-link' aria-current="page">ME CONTACTER</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
  )
}

export default Header
