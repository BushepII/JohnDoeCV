import "../style/pages_style/Home.scss"
import johnDoeAboutPicture from "../assets/john-doe-about.jpg";

const Home = () => {
    const scrollToSection = () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <>
            <section className="presentation container-fluid d-flex flex-column text-center justify-content-center align-items-center" id="presentation-home">
                <h1 className="mb-3">Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button type="button" className="btn btn-primary px-4 m-2" onClick={scrollToSection}>En savoir plus</button>
            </section>

            <section className="container my-5" id="about">
                <section className="row justify-content-center">
                    <section className="col-12 col-md-6 p-5">
                        <h1>À propos</h1>
                        <hr className="blue-line"/>
                        <p>Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi une formation d&apos;<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j&apos;ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. </p>
                        <br/>
                        <p>Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                        <br/>
                        <p>J&apos;accorde une attention particulière à la qualité du code que j&apos;écris et je respecte les bonnes pratiques du web.</p>
                    </section>
                    <section className="col-12 col-md-6 p-5">
                        <img src={johnDoeAboutPicture} className="img-fluid rounded" alt="" />
                        <h2 className="mt-2">Mes compétences</h2>
                        <p className="mt-3 mb-2">HTML5 90%</p>
                        <div className="progress" role="progressbar" aria-label="html5" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-html5"></div>
                        </div>
                        <p className="mt-3 mb-2">CSS3 80%</p>
                        <div className="progress" role="progressbar" aria-label="css3" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-css3"></div>
                        </div>
                        <p className="mt-3 mb-2">JAVASCRIPT 70%</p>
                        <div className="progress" role="progressbar" aria-label="javascript" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-javascript"></div>
                        </div>
                        <p className="mt-3 mb-2">PHP 60%</p>
                        <div className="progress" role="progressbar" aria-label="php" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-php"></div>
                        </div>
                        <p className="mt-3 mb-2">REACT 50%</p>
                        <div className="progress" role="progressbar" aria-label="react" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-react"></div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
}

export default Home;