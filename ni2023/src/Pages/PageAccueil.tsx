import React from 'react';
import PageContact from './PageContact.tsx';
import PageMesures from './PageMesures.tsx';
import PageIdeesRecu from './PageIdeesRecu.tsx';
import PageActionIndividuel from './PageActionIndividuel.tsx';
import { useState } from 'react';

import './PageAccueil.css';



 function PageAccueil() {
    

  const [redirection, setRedirection] = useState(1);
  const i = require('./images/image.png');
{redirection === 1 && <PageContact redirection={setRedirection} />};
{redirection === 2 && <PageMesures redirection={setRedirection} />};
{redirection === 3 && <PageIdeesRecu redirection={setRedirection} />};
{redirection === 4 && <PageActionIndividuel redirection={setRedirection} />};
    return (

      
  

     
      <div className="pageAccueil">
        {/* Bannière Visuelle Impactante */}


          <button onClick={() => setRedirection(1)}>Contact</button>
          <button onClick={() => setRedirection(2)}>Mesures</button>
          <button onClick={() => setRedirection(3)}>Défis</button>
          <button onClick={() => setRedirection(4)}>Idées Reçues</button>
      

        <div className="banner">
        <img src="lien_vers_image_ou_animation" alt="" />
        <p className="default">ptite dingz</p>
        </div>

        {/* Titre Accrocheur */}
        <h1 className="pageTitle">Bienvenue sur SeedIT : Agissons pour un Avenir Vert !</h1>

        {/* Introduction Ludique */}
        <p className="introText">Découvrez comment des actions simples peuvent avoir un impact énorme sur l'environnement. Prêt à relever le défi ?</p>

        {/* Défi Écologique Mensuel */}
        <section className="monthlyChallenge">
          <h2>Défi Écologique du Mois :</h2>
          <a href="#defi" className="ctaLink">Participer</a>
        </section>

        {/* Section Actions Individuelles */}
        <section className="rotating-text">
          <h2>Actions Individuelles :</h2>
          <p>Explorez des actions quotidiennes pour réduire votre empreinte carbone. Chaque geste compte ! <a href="#actions">Découvrir les Actions</a></p>
        </section>

        {/* Déconstruction des Idées Reçues */}
        <section className="rotating-text">
          <h2>Déconstruction des Idées Reçues :</h2>
          <p>Démystifions les mythes environnementaux ! Apprenez la vérité sur les changements climatiques et les solutions. <a href="#verite">Découvrir la Vérité</a></p>
        </section>
        <img src={i} alt="seedit" />
        {/* Solutions Politiques */}
        <section className="rotating-text">
          <h2>Solutions Politiques :</h2>
          <p>Découvrez comment les politiques en cours contribuent à un avenir durable. <a href="#politiques">En Savoir Plus</a></p>
        </section>

        {/* Appel à l'Action */}
        <section className="rotating-text">
          <h2>Appel à l'Action :</h2>
          <p>Rejoignez-nous dans la lutte contre le changement climatique. Ensemble, nous pouvons créer un avenir positif ! <a href="#commencer">Commencer</a></p>
        </section>

        {/* Témoignages Positifs */}
        <section className="positiveTestimonials">
          <h2>Témoignages Positifs :</h2>
          {/* Intégrez des témoignages ou des succès d'utilisateurs ici */}
        </section>

        {/* Section de Partage Social */}
        <section className="socialSharing">
          <h2>Partagez sur les Réseaux Sociaux :</h2>
          <p>Partagez vos actions écologiques sur les médias sociaux ! Utilisez #AgissonsVert et inspirez vos amis à rejoindre le mouvement.</p>
        </section>

        {/* Liens Rapides */}
        <footer>
          <a href="#actions" className="quickLink">Actions Individuelles</a>
          <a href="#defi" className="quickLink">Défis Écologiques</a>
          <a href="#donnees" className="quickLink">Données Chiffrées</a>
        </footer>
      </div>
    );
    }
export default PageAccueil;
