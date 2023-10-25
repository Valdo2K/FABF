export default function Service () {
    return (
        <section class="features-icons bg-light text-center mb-2 py-5" id="service">
             <h2 class="text-success">NOS SERVICES</h2>
             <hr/>
             <div class="container h-100">
                  <div class="row justify-content-between align-items-start flex-wrap">
                      <div class="col-lg-4 col-md-6 col-sm-12 shadow-lg">
                          <div class="features-icons-icon d-flex"><i class="bi bi-currency-dollar m-auto text-success display-1"></i></div>
                          <h3>Relevé de salaire</h3>
                          <p class="lead mb-0">Votre relevé de salaire est disponible 24h/24 et 7j/7</p>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12 shadow-lg">
                          <div class="features-icons-icon d-flex"><i class="bi bi-file-earmark-plus m-auto text-success display-1"></i></div>
                          <h3>Enregistrement de demande</h3>
                          <p class="lead mb-0">Nous enregistrerons vos demandes de domiciliation ou de changement d'assignation</p>
                      </div>
                     <div class="col-lg-4 col-md-6 col-sm-12 shadow-lg">
                          <div class="features-icons-icon d-flex"><i class="bi bi-terminal m-auto text-success display-1"></i></div>
                          <h3>Envoi de documents</h3>
                          <p class="lead mb-0">Nous permettons aux agents des structures d'échanger des documents en toute sécurité</p>
                     </div>
                  </div>
             </div>
        </section> 
    );
}