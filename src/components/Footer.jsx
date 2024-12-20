import '../style/components_style/Footer.css'

function Footer() {

  return (
    <>
        <footer className='container-fluid bg-body-tertiary text-center p-4'>
            <section className='row'>
                <section className='col-4'>
                    <h4>John Doe</h4>
                    <p>40 Rue Laure Diebold<br/>
                        69009 Lyon, France
                    </p>
                    <a href="tel:+33620304050">Téléphone : 06 20 30 40 50</a>
                    <section className='row'>
                        <a href="#" className='col'><img src="src\assets\github_icon.png" alt="" className='img-fluid'/></a>
                        <a href="#" className='col'><img src="src\assets\twitter_icon.png" alt="" className='img-fluid'/></a>
                        <a href="#" className='col'><img src="src\assets\linkedin_icon.png" alt="" className='img-fluid'/></a>
                    </section>
                </section>

                <section className='col-3'>
                    <h4>Liens utiles</h4>
                </section>

                <section className='col-3'>
                    <h4>Mes dernières réalisations</h4>
                </section>

                <section className='col-2'>
                    <h4>Mes derniers articles</h4>
                </section>
            </section>
        </footer>
    </>
  )
}

export default Footer
