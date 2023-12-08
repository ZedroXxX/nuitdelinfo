import React from 'react';
import './PageContact.css'; // Importe le fichier CSS

function PageContact({ redirection }) {
  return (
    <div className="PageContact">
      {/* En-tête */}
      <header>
        <h1>Contactez-nous</h1>
      </header>

      {/* Contenu principal */}
      {/* Lien de retour vers la page d'accueil */}
      <a href="./PageAccueil.tsx">Retour à l'accueil</a>
      <main className="main-content">
        <form action="process_contact_form.php" method="POST">
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <input type="submit" value="Envoyer" />
        </form>
      </main>

      {/* Pied de page (optionnel) */}
      <footer>
        <p>&copy; 2023 Nom de ton entreprise</p>
      </footer>
    </div>
  );
}

export default PageContact;
