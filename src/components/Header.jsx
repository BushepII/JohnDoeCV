import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import '../style/components_style/Header.css';


function Header() {
    return (
        <header className='container-fluid px-0'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>

                    <a href="#" className='navbar-brand'>JOHN DOE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <Nav className='navbar-nav mb-2 mb-lg-0'>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/" aria-current="page">ACCUEIL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/services" aria-current="page">SERVICES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/realisations" aria-current="page">RÉALISATIONS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/blog" aria-current="page">BLOG</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} to="/contact" aria-current="page">ME CONTACTER</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;