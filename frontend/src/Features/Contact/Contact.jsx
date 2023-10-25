export default function Contact () {
    return (
        <section id="contact" class="contact section-bg text-center bg-body-tertiary py-5">
            <div class="container">
      
               <div class="section-title ">
                   <h2 class="text-success">CONTACTEZ-NOUS</h2>
                   <hr/>
                   <p>Nous sommes là pour vous aider, n'hésitez-pas à nous contacter</p>
                </div>
      
               <div class="row mt-5 justify-content-center">
      
                  <div class="col-lg-10">
      
                       <div class="info-wrap">
                          <div class="row">
                               <div class="col-lg-4 info">
                                  <i class="bi bi-geo-alt text-success"></i>
                                  <h4>Localisaion:</h4>
                                  <p>Route de l'Aéroport 01 BP 301<br/>Cotonou-Bénin</p>
                               </div>
      
                               <div class="col-lg-4 info mt-4 mt-lg-0">
                                   <i class="bi bi-envelope text-success"></i>
                                   <h4>Email:</h4>
                                   <p>info@finances.bj<br/>cabinet@finances.bj<br/>secretariatgeneral@finances.bj</p>
                               </div>
      
                               <div class="col-lg-4 info mt-4 mt-lg-0">
                                   <i class="bi bi-phone text-success"></i>
                                   <h4>Appeler:</h4>
                                   <p>+229 21 30 10 20<br></br></p>
                               </div>
                          </div>
                      </div>
      
                    </div>
      
                </div>
      
                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-10">
                       <div className="form-group">
                          <p>Utiliser ce formulaire pour nous faire part de vos commentaires sur notre application. Nous apprécions vos retours et suggestions.</p>
                          <div class="row">
                              <div class="col-md-6 form-group">
                                   <input type="text" name="name" class="form-control" id="name" placeholder="Nom" required/>
                              </div>
                              <div class="col-md-6 form-group mt-3 mt-md-0">
                                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" required/>
                              </div>
                          </div>
                          <div class="form-group mt-3">
                              <input type="text" class="form-control" name="objet" id="objet" placeholder="Objet" required/>
                           </div>
                           <div class="form-group mt-3">
                               <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                           </div>
                           <br />
               
                           <div class="text-center"><button type="submit" class="btn btn-success">ENVOYER</button></div>
                     </div>
                   </div>
      
                </div>
      
            </div>
      </section>
    );
}