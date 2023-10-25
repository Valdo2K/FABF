import './Home.css';

export default function Home () {
    return (
        <section id="accueil" className="showcase mb-5 py-5 h-100vh" >
              <div className="row g-0" id="container">
                  <div className="col-lg-6  my-auto showcase-img ">
                      <p>
                          <img src="https://archives.beninwebtv.com/wp-content/uploads/2020/06/FAB.jpg" alt="" className="img-fluid rounded float-start" />
                      </p>
                 </div>
                 <div className="col-lg-6 my-auto showcase-text text-center small">
                      <h2 className="text-success fs-1 fw-bold">Bienvenue sur FABF</h2>
                      <p className="lead mb-0 fs-6 ">Nous répondons efficacement aux besoins des forces armées en matière de gestion financière avec notre plateforme spécialisée:
                           la solution tout en un pour optimiser vos ressources et soutenir vos missions essentielles</p>
                 </div>
              </div>
           </section>
    );
}