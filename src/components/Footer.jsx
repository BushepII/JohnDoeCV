import '../style/components_style/Footer.scss'
import Nav from 'react-bootstrap/Nav';
import { useNavigate, useLocation } from "react-router-dom";
import chevron from '../assets/chevron-right.svg';

function Footer() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollToSection = (pageLink, sectionId) => (e) => {
        e.preventDefault(); // Prevent default navigation behavior

        if (location.pathname !== pageLink) {
            navigate("/" + pageLink, { replace: true }); // Navigate to the home page first
        }

        setTimeout(() => {
            const targetSection = document.getElementById(sectionId);
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 100);
    };

  return (
    <>
        <footer className='container-fluid py-4 px-0'>
            <section className='container-fluid'>
                <section className='row justify-content-around px-0 py-4'>
                    <section className='col-12 col-md-5 col-lg-2 pb-2'>
                        <h4>John Doe</h4>
                        <p>40 Rue Laure Diebold<br/>
                            69009 Lyon, France
                        </p>
                        <a href="tel:+33620304050" className='pb-4'>Téléphone : 06 20 30 40 50</a>
                        <Nav.Item className="d-inline">
                            <Nav.Link href="#" onClick={handleScrollToSection("github-infos", "github")} className='social-picture-link'>
                                <img src="src\assets\github_icon.png" alt="" className='social-picture'/>
                            </Nav.Link>
                        </Nav.Item>
                        <a href="https://x.com/?lang=fr&mx=2" target='_blank' className='social-picture-link'><img src="src\assets\twitter_icon.png" alt="" className='social-picture'/></a>
                        <a href="https://fr.linkedin.com/" target="_blank" className='social-picture-link'><img src="src\assets\linkedin_icon.png" alt="" className='social-picture'/></a>
                    </section>

                    <section className='col-12 col-md-5 col-lg-2 pb-2'>
                        <h4>Liens utiles</h4>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("", "presentation-home")}><img src={chevron} alt="" />Accueil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("", "about")} ><img src={chevron} alt="" />À propos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("services", "services")}><img src={chevron} alt="" />Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("contact", "contact")}><img src={chevron} alt="" />Me contacter</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("legal-mentions", "container")}><img src={chevron} alt="" />Mentions légales</Nav.Link>
                        </Nav.Item>
                    </section>

                    <section className='col-12 col-md-5 col-lg-2 pb-2'>
                        <h4>Mes dernières réalisations</h4>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("realisations", "fresh-food")}><img src={chevron} alt="" />Fresh food</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("realisations", "akira")}><img src={chevron} alt="" />Restaurant Akira</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("realisations", "good-space")}><img src={chevron} alt="" />Espace bien-être</Nav.Link>
                        </Nav.Item>
                    </section>

                    <section className='col-12 col-md-5 col-lg-2 pb-2'>
                        <h4>Mes derniers articles</h4>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("blog", "code-website")}><img src={chevron} alt="" />Coder son site en HTML/CSS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("blog", "sell-web")}><img src={chevron} alt="" />Vendre ses produits sur le web</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" onClick={handleScrollToSection("blog", "google-position")}><img src={chevron} alt="" />Se positionner sur Google</Nav.Link>
                        </Nav.Item>
                    </section>
                </section>
            </section>
            <section className='row text-center bg-dark m-0'>
                <h4 id="copyright" className='p-4 m-0'>&copy; Designed by John Doe</h4>
            </section>
            
        </footer>
    </>
  )
}

export default Footer
