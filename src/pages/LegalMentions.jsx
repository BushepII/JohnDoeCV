import "../style/pages_style/LegalMentions.scss"

const LegalMentions = () => {
    return (
        <>
            <div className="container-fluid legal-mentions my-5">
                <div className="row text-center py-4">
                    <section className="col-12">
                        <h1>MENTIONS LÉGALES</h1>
                        <hr className="border border-primary border-2 col-2 mx-auto"/>
                    </section>
                </div>

                <div className="accordion" id="accordion">
                    <section className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse row" data-bs-parent="#accordion">
                            <section className="accordion-body">
                                <h3>John Doe</h3>
                                <div className="d-flex">
                                    <img src="src/assets/pictograms/icon_localisation.png" alt="" className="pictogram img-fluid"/>
                                    <p>
                                        40 Rue Laure Diebold
                                        <br/>
                                        69009 Lyon, France
                                    </p>
                                </div>

                                <div className="d-flex">
                                    <img src="src/assets/pictograms/icon_phone.png" alt="" className="pictogram img-fluid"/>
                                    <a href="tel:+33620304050">06 20 30 40 50</a>
                                </div>

                                <div className="d-flex">
                                    <img src="src/assets/pictograms/icon_mail.png" alt="" className="pictogram img-fluid"/>
                                    <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                                </div>
                                    
                            </section>
                        </div>
                    </section>
                    <section className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <section className="accordion-body">
                                <h3>Always Data</h3>
                                <p>
                                    91 rue du Faubourg Saint Honoré
                                    <br/>
                                    75008 Paris
                                </p>
                                <div className="d-flex py-3">
                                    <img src="src/assets/pictograms/icon_world.png" alt="" className="pictogram img-fluid"/>
                                    <a href="www.alwaysdata.com" target="_blank">www.alwaysdata.com</a>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <section className="accordion-body">
                                <h3>Crédits</h3>
                                <p>
                                    Site développé par John Doe, étudiant du CEF.
                                    <br/>
                                    Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank">Pixabay</a>
                                </p>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default LegalMentions;