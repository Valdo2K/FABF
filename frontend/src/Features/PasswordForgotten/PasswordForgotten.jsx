export default function PasswordForgotten() {
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
                                             <h5 class="card-title text-center pb-0 fs-4">FABF</h5>
                                             <p class="text-center small">Entrer votre adresse email pour réinitialiser votre mot de passe par email</p>
                                            
                                         </div>
                   
                                        <form action="{% url 'login' %}" class="row g-3 needs-validation" novalidate method="POST">
                                           <div class="col-12">
                                               <input type="email" name="email" class="form-control" id="email" placeholder="Adresse email" required/>
                                               <div class="invalid-feedback">Veuillez renseigner votre adresse e-mail!</div>
                        
                                            </div>


                                             <div class="col-12 mt-5 d-flex justify-content-center mx-2">
                                                 <button class="btn btn-success" type="submit">Réinitialiser</button>
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