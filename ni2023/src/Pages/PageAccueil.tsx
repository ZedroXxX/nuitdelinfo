import React, { Component } from 'react';
import './PageAccueil.css';

class PageAccueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomDuDefi: "Énergie Sans Frontières",
    };
  }

  render() {
    return (
      <div className="pageAccueil">
        {/* Bannière Visuelle Impactante */}
        <div className="banner">
        <img src="lien_vers_image_ou_animation" alt="" />

        </div>

        {/* Titre Accrocheur */}
        <h1 className="pageTitle">Bienvenue sur SeedIT : Agissons pour un Avenir Vert !</h1>

        {/* Introduction Ludique */}
        <p className="introText">Découvrez comment des actions simples peuvent avoir un impact énorme sur l'environnement. Prêt à relever le défi ?</p>

        {/* Défi Écologique Mensuel */}
        <section className="monthlyChallenge">
          <h2>Défi Écologique du Mois :</h2>
          <p>{this.state.nomDuDefi}</p>
          <a href="#defi" className="ctaLink">Participer</a>
        </section>

        {/* Section Actions Individuelles */}
        <section className="individualActions">
          <h2>Actions Individuelles :</h2>
          <p>Explorez des actions quotidiennes pour réduire votre empreinte carbone. Chaque geste compte ! <a href="#actions">Découvrir les Actions</a></p>
        </section>

        {/* Déconstruction des Idées Reçues */}
        <section className="mythBusting">
          <h2>Déconstruction des Idées Reçues :</h2>
          <p>Démystifions les mythes environnementaux ! Apprenez la vérité sur les changements climatiques et les solutions. <a href="#verite">Découvrir la Vérité</a></p>
        </section>

        {/* Solutions Politiques */}
        <section className="politicalSolutions">
          <h2>Solutions Politiques :</h2>
          <p>Découvrez comment les politiques en cours contribuent à un avenir durable. <a href="#politiques">En Savoir Plus</a></p>
        </section>

        {/* Appel à l'Action */}
        <section className="callToAction">
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
}

export default PageAccueil;
