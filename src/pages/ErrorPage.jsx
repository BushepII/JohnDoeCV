import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

function ErrorPage() {

  return (
    <>
        <section className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>Erreur 404 - Page non trouvée !</h1>
            <Nav.Item className="fs-1 text-primary">
                <Nav.Link as={NavLink} to="/" aria-current="page">Retour à l'accueil</Nav.Link>
            </Nav.Item>
        </section>
    </>
  )
}

export default ErrorPage;
