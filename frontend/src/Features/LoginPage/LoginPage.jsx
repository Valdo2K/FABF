export default function LoginPage () {
    return (
        <main>
           <div class="container">
  
              <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                  <div class="container">
                       <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                 <div class="card mb-3">
                                       <div class="card-body bg-light">
                                           <div class="pt-4 pb-2">
                                                <h5 class="card-title text-center pb-0 fs-4">Se connecter</h5>
                                                <p class="text-center small">Entrer vos informations de connexion</p>
                                               
                                            </div>
                      
                                           <form action="{% url 'login' %}" class="row g-3 needs-validation" novalidate method="POST">
                                              <div class="col-12">
                                                  <label for="yourUsername" class="form-label">Nom d'utilisateur</label>
                                                       <div class="input-group has-validation">
                                                          <span class="input-group-text" id="inputGroupPrepend"> <i class='bx bxs-user'></i></span>
                                                          <input type="text" name="username" class="form-control" id="yourUsername" required/>
                                                          <div class="invalid-feedback">Veuillez entrer votre nom d'utilisateur.</div>
                                                         </div>
                                               </div>
  
                                                <div class="col-12">
                                                  <label for="yourPassword" class="form-label">Mot de passe</label>
                                                      <div class="input-group has-validation">
                                                            <span class="input-group-text" id="inputGroupPrepend"><i class='bx bxs-lock-alt'></i></span>
                                                            <input type="password" name="password" class="form-control" id="yourPassword" required/>
                                                            <div class="invalid-feedback">Veuillez entrer votre mot de passe!</div>
                                                     </div>
                                                </div>
  
                                                <div class="col-12 mt-5 d-flex justify-content-center mx-2">
                                                    <button class="btn btn-success" type="submit">Se connecter</button>
                                                </div>
                                                <div class="col-12">
                                                  <p class="small mb-0 d-flex justify-content-center"> <a href="/passwordForgotten" class="text-success"> Mot de passe oublié ?</a></p>
                                                </div>
                                                <div class="col-12">
                                                   <p class="small mb-0 text-center">N'avez-vous pas de compte ? <a href="/register" class="text-success">Créer son compte</a></p>
                                                </div>
                                          </form>
  
                                        </div>
                                  </div>
  
                                </div>
                           </div>
                     </div>
  
                    </section>
  
                </div>
            </main>
       );
   }