import "../style/pages_style/Services.scss"
import bannerMobile from '../assets/banner-mobile.jpg'
import bannerTablette from '../assets/banner-tablette.jpg'
import bannerDesktop from '../assets/banner.jpg'

import computerImage from '../assets/pictograms/icon_computer.png';
import htmlImage from '../assets/pictograms/icon_html.png';
import searchImage from '../assets/pictograms/icon_search.png';

const Services = () => {
    return (
        <>
            <picture>
                <source srcSet={bannerDesktop} media="(min-width: 992px)" />
                <source srcSet={bannerTablette} media="(min-width: 768px)" />
                <img src={bannerMobile} alt="bannière de fond pour introduire la page" className="img-fluid banner" />
            </picture>
            <div className="container-fluid mt-4" id="services">
                <div className="row text-center">
                    <section className="col-12">
                        <h1>MON OFFRE DE SERVICES</h1>
                        <p>Voici les prestations sur lesquelles je peux intervenir</p>
                        <hr className="border border-primary border-2 col-2 mx-auto"/>
                    </section>
                </div>


                <div className="row justify-content-evenly m-4">
                    <div className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card service">
                        <div className="card-body p-0">
                            <img src={computerImage} className="card-img-top img-fluid mx-auto d-block p-4" alt="..."/>
                            <section className="d-flex flex-column justify-content-center align-items-center m-4">
                                <h2 className="card-title">UX DESIGN</h2>
                                <p className="card-text">L&apos;<strong>UX Design</strong> est une méthode de conception centrée sur l&apos;utilisateur. Son but est d&apos;offrir une expérience de navigation optimale à l&apos;internaute.</p>
                            </section>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card service">
                        <div className="card-body p-0">
                            <img src={htmlImage} className="card-img-top img-fluid mx-auto d-block p-4" alt="..."/>
                            <section className="d-flex flex-column justify-content-center align-items-center m-4">
                                <h2 className="card-title">DÉVELOPPEMENT WEB</h2>
                                <p className="card-text">Le <strong>Développement de sites web</strong> repose sur l&apos;utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                            </section>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card service">
                        <div className="card-body p-0">
                            <img src={searchImage} className="card-img-top img-fluid mx-auto d-block p-4" alt="..."/>
                            <section className="d-flex flex-column justify-content-center align-items-center m-4">
                                <h2 className="card-title">RÉFÉRENCEMENT</h2>
                                <p className="card-text">Le <strong>Référencement naturel d&apos;un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;