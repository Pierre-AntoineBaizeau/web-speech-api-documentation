import "./css/guide.css";

export const DeveloperGuide = () => {
  return (
    <div className="guide">
      <h1>Guide du Développeur</h1>
      <p>
        Bienvenue dans la section du guide destinée aux développeurs souhaitant
        contribuer au développement de Web Speech API.
      </p>

      <h2>Arborescence du Projet</h2>
      <pre className="code-block">
        <code>
          - src/
          <br />
          &nbsp;&nbsp;&nbsp;- test/
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Dossiers contenant les tests
          utilisant Jest.
          <br />
          &nbsp;&nbsp;&nbsp;- utils.js
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Fichier avec des utilitaires
          partagés.
          <br />
          &nbsp;&nbsp;&nbsp;- commands.js
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Définition des commandes
          vocales.
          <br />
          &nbsp;&nbsp;&nbsp;- commandProcessor.js
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Traitement des commandes
          vocales.
          <br />
          &nbsp;&nbsp;&nbsp;- index.js
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Point d'entrée de l'API.
          <br />
          &nbsp;&nbsp;&nbsp;- main.js
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Fichier principal exportant des
          fonctionnalités spécifiques.
          <br />
        </code>
      </pre>

      <h2>Contribution</h2>
      <p>Si vous souhaitez contribuer au projet, suivez ces étapes :</p>
      <ol>
        <li>Fork du Projet</li>
        <li>Clonez votre Fork</li>
        <li>Installez les Dépendances</li>
        <li>Créez une Branche de Fonctionnalité</li>
        <li>Effectuez vos Modifications</li>
        <li>Ajoutez, Commitez, Pushez</li>
        <li>Créez une Pull Request</li>
      </ol>

      <h2>Tests</h2>
      <p>
        Le projet utilise Jest pour les tests. Pour exécuter les tests, utilisez
        la commande suivante :
      </p>
      <pre>
        <code>npm test</code>
      </pre>

      <h2>Besoin d'Aide ?</h2>
      <p>
        Si vous avez des questions ou des problèmes, n'hésitez pas à ouvrir une
        issue sur GitHub ou à contacter l'équipe de développement.
      </p>
    </div>
  );
};
