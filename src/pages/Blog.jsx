import "../style/pages_style/Blog.scss"

import bannerMobile from '../assets/banner-mobile.jpg'
import bannerTablette from '../assets/banner-tablette.jpg'
import bannerDesktop from '../assets/banner.jpg'

import coderImage from '../assets/blog/coder.jpg'
import croissanceImage from '../assets/blog/croissance.jpg'
import googleImage from '../assets/blog/google.jpg'
import screensImage from '../assets/blog/screens.jpg'
import seoImage from '../assets/blog/seo.jpg'
import technosImage from '../assets/blog/technos.png'

const Blog = () => {
    return (
        <>
            <picture>
                <source srcSet={bannerDesktop} type="image/jpeg" media="(min-width: 992px)" />
                <source srcSet={bannerTablette} type="image/jpeg" media="(min-width: 768px)" />
                <img src={bannerMobile} type="image/jpeg" alt="bannière de fond pour introduire la page" className="img-fluid banner"/>
            </picture>
            <section className="container-fluid mt-4" id="blog">
                <section className="row text-center">
                    <section className="col-12">
                        <h1>BLOG</h1>
                        <p>Retrouvez ici quelques articles sur le développement web.</p>
                        <hr className="border border-primary border-2 col-2 mx-auto"/>
                    </section>
                </section>
                <section className="row justify-content-center m-4">
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card h-100 card" id="code-website">
                        <img src={coderImage} className="card-img-top" alt="multiples lignes de codes en html"/>
                        <section className="card-body p-0 d-flex flex-column flex-grow-1">
                            <section className="d-flex flex-column justify-content-evenly m-4 flex-grow-1">
                                <h2 className="card-title">Coder son site en HTML/CSS</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <a href="#" className="btn btn-primary card-link mt-4">Lire la suite</a>
                            </section>
                            <p className="card-footer">Publié le 22 août 2022</p>
                        </section>
                    </section>
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card" id="sell-web">
                        <img src={croissanceImage} className="card-img-top" alt="plusieurs tas de pièces ainsi qu'une plante grandissante symbolisant la croissance au fur et à mesure du temps"/>
                        <section className="card-body p-0 d-flex flex-column flex-grow-1">
                            <section className="d-flex flex-column justify-content-evenly m-4 flex-grow-1">
                                <h2 className="card-title">Vendre ses produits sur le web</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <a href="#" className="btn btn-primary card-link mt-4">Lire la suite</a>
                            </section>
                            <p className="card-footer">Publié le 20 août 2022</p>
                        </section>
                    </section>
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card" id="google-position">
                        <img src={googleImage} className="card-img-top" alt="ordintaeur posé sur un bureau. Il affiche la page d'accueil Google"/>
                        <section className="card-body p-0 d-flex flex-column flex-grow-1">
                            <section className="d-flex flex-column justify-content-evenly m-4 flex-grow-1">
                                <h2 className="card-title">Se positionner sur Google</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <a href="#" className="btn btn-primary card-link mt-4">Lire la suite</a>
                            </section>
                            <p className="card-footer">Publié le 1 août 2022</p>
                        </section>
                    </section>
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card">
                        <img src={screensImage} className="card-img-top" alt="Plusieurs objets high-tech posés sur un bureau dont un écran, un clavier, un ordinateur portable, une tablette et une souris. Tout cela montre un côté assidu à la tâche."/>
                        <section className="card-body p-0 d-flex flex-column flex-grow-1">
                            <section className="d-flex flex-column justify-content-evenly m-4 flex-grow-1">
                                <h2 className="card-title">Coder en responsive design</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <a href="#" className="btn btn-primary card-link mt-4">Lire la suite</a>
                            </section>
                            <p className="card-footer">Publié le 31 juillet 2022</p>
                        </section>
                    </section>
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card">
                        <img src={seoImage} className="card-img-top" alt="Ensemble de mots, comme un brain storm, en rapport avec le référencement SEO qui apparait en plus gros."/>
                        <section className="card-body p-0 d-flex flex-column flex-grow-1">
                            <section className="d-flex flex-column justify-content-evenly m-4 flex-grow-1">
                                <h2 className="card-title">Techniques de référencement</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <a href="#" className="btn btn-primary card-link mt-4">Lire la suite</a>
                            </section>
                            <p className="card-footer">Publié le 30 juillet 2022</p>
                        </section>
                    </section>
                    <section className="col-12 col-md-5 col-lg-3 my-3 m-md-4 p-0 card">
                        <img src={technosImage} className="card-img-top" alt="Quadrillage de logos montrant les technologies utilisées comme Bootstrap, Android, Python, HTML5, etc."/>
                        <section className="card-body p-0 d-flex flex-column flex-grow-1">
                            <section className="d-flex flex-column justify-content-evenly m-4 flex-grow-1">
                                <h2 className="card-title">Apprendre à coder</h2>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <a href="#" className="btn btn-primary card-link mt-4">Lire la suite</a>
                            </section>
                            <p className="card-footer">Publié le 12 juillet 2022</p>
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Blog;