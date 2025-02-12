import "../style/pages_style/Realisations.scss"

import bannerMobile from '../assets/banner-mobile.jpg'
import bannerTablette from '../assets/banner-tablette.jpg'
import bannerDesktop from '../assets/banner.jpg'

import careSpaceImage from '../assets/portfolio/espace-bien-etre.jpg'
import freshFoodImage from '../assets/portfolio/fresh-food.jpg'
import japaneseRestaurantImage from '../assets/portfolio/restaurant-japonais.jpg'

const Realisations = () => {
    return (
        <>
            <picture>
                <source srcSet={bannerDesktop} type="image/jpeg" media="(min-width: 992px)" />
                <source srcSet={bannerTablette} type="image/jpeg" media="(min-width: 768px)" />
                <img src={bannerMobile} type="image/jpeg" alt="" className="img-fluid banner"/>
            </picture>
            <section className="container-fluid mt-4" id="realisations">
                <section className="row text-center">
                    <section className="col-12">
                        <h1>PORTFOLIO</h1>
                        <p>Voici quelques-unes de mes réalisations</p>
                        <hr className="border border-primary border-2 col-2 mx-auto"/>
                    </section>
                </section>
                <section className="row justify-content-center m-4">
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 h-100 card" id="fresh-food">
                        <img src={freshFoodImage} className="card-img-top" alt="..."/>
                        <section className="card-body p-0">
                            <section className="d-flex flex-column align-items-center m-4">
                                <h2 className="card-title">Fresh food</h2>
                                <p className="card-text">Réalisation d&apos;un site avec commande en ligne.</p>
                                <a href="#" className="btn btn-outline-primary card-link mt-4">Voir</a>
                            </section>
                            <p className="card-footer text-center">Site réalisé avec PHP et MySQL</p>
                        </section>
                    </section>
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 h-100 card" id="akira">
                        <img src={japaneseRestaurantImage} className="card-img-top" alt="..."/>
                        <section className="card-body p-0">
                            <section className="d-flex flex-column align-items-center m-4">
                                <h2 className="card-title">Restaurant Akira</h2>
                                <p className="card-text">Réalisation d&apos;un site vitrine.</p>
                                <a href="#" className="btn btn-outline-primary card-link mt-4">Voir</a>
                            </section>
                            <p className="card-footer text-center">Site réalisé avec WordPress</p>
                        </section>
                    </section>
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 h-100 card" id="good-space">
                        <img src={careSpaceImage} className="card-img-top" alt="..."/>
                        <section className="card-body p-0">
                            <section className="d-flex flex-column align-items-center m-4">
                                <h2 className="card-title">Espace bien-être</h2>
                                <p className="card-text">Réalisation d&apos;un site vitrine pour un patricien de bien-être.</p>
                                <a href="#" className="btn btn-outline-primary card-link mt-4">Voir</a>
                            </section>
                            <p className="card-footer text-center">Site réalisé en HTML/CSS</p>
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Realisations;