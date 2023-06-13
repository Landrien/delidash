import React from 'react'
import './Registration.css'

export default function Registration() {
    return (
        <div>
            <div className='container'>
              <form action="" method="post">
                <div className="text-center">
                <h1 className="text-3xl text-success">DeliDash</h1>
                </div>
                <select>
                 <option value="option1">Choisir</option>
                 <option value="option2">Utilisateur</option>
                 <option value="option3">Restaurateur</option>
                 <option value="option4">Livreur</option>
                 <option value="option4">Développeur tiers</option>
                </select>
                <br></br>
                <br></br>
                <div>
                  <label htmlFor="">Nom</label>
                  <input type="text" className='form-control' />
                </div>
                <br></br>
                <div>
                   <label htmlFor="">Prénom</label>
                   <input type="text" className='form-control' />
                </div>
                <br></br>
                <div>
                   <label htmlFor="">Email</label>
                   <input type="email" className='form-control' />
                </div>
                <br></br>
                <br></br>
                <div>
                   <label htmlFor="">Ville</label>
                   <input type="text" className='form-control' />
                </div>
                <br></br>
                <div>
                   <label htmlFor="">Mot de passe</label>
                   <input type="password" className='form-control' />
                </div>
                <br></br>
                <div>
                    <button className="btn btn-success btn-block mt-3">
                        S'inscrire
                    </button>
                </div>
                <h5>Utilisateur existant?</h5>
                <div>
                    <button className="btn btn-success btn-block mt-3">
                        Se connecter
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}