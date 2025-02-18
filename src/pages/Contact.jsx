import "../style/pages_style/Contact.scss";

import localisationImage from "../assets/pictograms/icon_localisation.png";
import phoneImage from "../assets/pictograms/icon_phone.png";

const Contact = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center contact">
                <div className="card contact-card">
                    <div className="card-body">
                        <div className="row p-4">
                            <section className="col text-center">
                                <h1>ME CONTACTER</h1>
                                <p>Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.</p>
                                <hr className="border border-primary border-2 col-2 mx-auto"/>
                            </section>
                        </div>
                        <div className="row p-4">
                            <section className="col-12 col-md-6 d-flex flex-column justify-content-between grow-1">
                                <h2>Formulaire de contact</h2>
                                <hr className="border border-primary border-2 mt-0 mb-5"/>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Votre nom" aria-label="Username" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Votre adresse email" aria-label="email" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Votre numéro de téléphone" aria-label="phone" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Sujet" aria-label="object" />
                                </div>
                                <div className="input-group">
                                    <textarea className="form-control" placeholder="Votre message" aria-label="message" rows='5'></textarea>
                                </div>
                            </section>
                            <section className="col-12 col-md-6 d-flex flex-column justify-content-between">
                                <h2>Mes coordonnées</h2>
                                <hr className="border border-primary border-2 mt-0 mb-5"/>
                                <div className="d-flex">
                                    <img src={localisationImage} alt="pictogramme de localisation" className="pictogram img-fluid"/>
                                    <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
                                </div>
                                <div className="d-flex pb-4">
                                    <img src={phoneImage} alt="pictogramme de téléphone" className="pictogram img-fluid"/>
                                    <a href="tel:+33620304050">06 20 30 40 50</a>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619974!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1736367357296!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </section>
                            <div className="col-12 col-md-6 d-flex justify-content-center mt-4">
                                <a href="#" className="btn btn-primary card-link send-button">Envoyer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;