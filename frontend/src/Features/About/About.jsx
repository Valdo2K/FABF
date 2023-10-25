export default function About () {
    return (
        <section id="apropos" class="about bg-light py-5">
            <div class="container" data-aos="fade-up">
      
               <div class="section-title text-center">
                  <h2 class="text-success">A PROPOS</h2>
                  <hr class="border-success"></hr>
              </div>
      
              <div class="row fs-4" >
                  <div class="col-lg-6">
                      <p>
                         FABF est une plateforme dédiée à soutenir les forces armées béninoises en leur offrant des services tels que :
                      </p>
                      <ul class="list-unstyled">
                          <li><i class="bi bi-check-all"></i> La consultation de leur relevé de salaire</li>
                          <li><i class="bi bi-check-all"></i> L'échange sécurisé de documents administratifs</li>
                          <li><i class="bi bi-check-all"></i> La gestion des demandes administratives</li>
                      </ul>
                  </div>
                  <div class="col-lg-6">
                      <p>
                          Notre objectif est de simplifier les processus et faciliter la communication interne tout en garantissant la sécurité et la confidentialité des informations.
                      </p>
                      <p>
                           Contactez-nous pour en savoir plus sur nos services et comment nous pouvons vous aider dans vos missions.
                      </p>
                      <div class="text-center">
                          <button type="button" class="btn btn-success"><a href="#" class="text-light" style={{}}>En savoir plus</a></button>
                     </div>
                  </div>
              </div>
      
           </div>
      </section>
      
    );
}