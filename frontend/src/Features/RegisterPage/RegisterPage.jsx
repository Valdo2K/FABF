import { Link } from "react-router-dom";

export default function RegisterPage () {
    
    
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
                                          <h5 class="card-title text-center pb-0 fs-4">Créer un compte</h5>
                                          <p class="text-center small">Entrez vos informations</p>
                                          <p class="text-center small  text-danger"></p>
                                        </div>

                    <form action="{% url 'add_user' %}" class="row g-3 needs-validation" novalidate method="POST">
                        <div class="col-12">
                        <label for="lastName" class="form-label">Nom</label>
                        <input type="text" name="lastName" class="form-control" id="lastName" required/>
                        <div class="invalid-feedback">Veuillez renseigner votre nom!</div>
                        </div>

                        <div class="col-12">
                        <label for="firstName" class="form-label">Prénom</label>
                        <input type="text" name="lastName" class="form-control" id="firstName" required/>
                        <div class="invalid-feedback">Veuillez renseigner votre nom!</div>
                        </div>

                        <div class="col-12">
                        <label for="birthPlace" class="form-label">Numéro matricule</label>
                        <input type="text" name="registrationNumber" class="form-control" id="registrationNumber" required/>
                        <div class="invalid-feedback">Veuillez renseigner votre numéro matricule!</div>
                        </div>

                        <div class="col-12">
                        <label for="birthDate" class="form-label">Date de naissance</label>
                        <input type="date" name="birthDate" class="form-control" id="birthDate" required/>
                        <div class="invalid-feedback">Veuillez renseigner votre date de naissance!</div>
                        </div>

                        <div class="col-12">
                        <label for="phone" class="form-label">Numéro de téléphone</label>
                        <input type="number" maxLength="8"  name="phone" class="form-control" id="phone" required/>
                        <div class="invalid-feedback">Veuillez renseigner votre numéro de téléphone!</div>
                        </div>

                        <div class="col-12">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" name="email" class="form-control" id="email" required/>
                        <div class="invalid-feedback">Veuillez renseigner votre adresse e-mail!</div>
                        </div>

                        <div class="col-12">
                        <label for="userName" class="form-label">Nom d'utilisateur</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend"><i class='bx bxs-user'></i></span>
                            <input type="text" name="userName" class="form-control" id="userName" required/>
                            <div class="invalid-feedback">Veuillez renseigner votre nom d'utilisateur.</div>
                        </div>
                        </div>

                        <div class="col-12">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input type="password" name="password" class="form-control" id="password" required/>
                        <div class="invalid-feedback">Veuillez renseigner votre mot de passe!</div>
                        </div>

                        <div class="col-12">
                        <label for="rePassword" class="form-label">Confirmer le mot de passe</label>
                        <input type="password" name="rePassword" class="form-control" id="rePassword" required/>
                        <div class="invalid-feedback">Veuillez renseigner le même mot de passe!</div>
                        </div>

                        <div class="col-15">
                            <label for="gender" class="form-label">Sexe </label>
                            <div class="btn-group" role="group">
                                        <input type="radio" class="btn-check" name="gender" value="0" id="radiogender0" autocomplete="off" checked/>
                                        <label class="btn btn-outline-success py-2" for="radiogender0">Masculin</label>

                                        <input type="radio" class="btn-check" name="gender" value="1" id="radiogender1" autocomplete="off" />
                                        <label class="btn btn-outline-success py-2" for="radiogender1">Féminin</label>
                            </div>
                        </div>
                        
                        
                        <div class="col-12">
                        <button class="btn btn-success w-100" type="submit">Créer un compte</button>
                        </div>
                        <div class="col-12 text-center">
                        <p class="small mb-0">Avez-vous déjà un compte? <Link to="/login" class="text-success">Connectez-vous</Link></p>
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