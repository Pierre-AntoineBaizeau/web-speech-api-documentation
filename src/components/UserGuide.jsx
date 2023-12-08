import "./css/guide.css";

export const UserGuide = () => {
  return (
    <div className="guide">
      <h1>Guide de l'Utilisateur</h1>
      <p>
        Bienvenue dans la documentation de Web Speech API, une bibliothèque
        JavaScript permettant le contrôle vocal d'un site internet.
      </p>

      <h2>Installation</h2>
      <p>
        Pour intégrer Web Speech API dans votre projet, suivez ces étapes
        simples :
      </p>
      <pre>
        <code>npm install web-speech-api --save</code>
      </pre>
      <p>Importez ensuite le module dans votre code :</p>
      <pre>
        <code>
          import <b>webVoiceHub</b> from 'web-speech-api';
        </code>
      </pre>
      <p>
        Enfin, appelez la fonction <code>webVoiceHub()</code> pour initialiser
        la reconnaissance vocale.
      </p>

      <h2>Utilisation</h2>
      <p>
        Web Speech API vous permet de contrôler votre site internet par la voix
        en utilisant des commandes vocales. Par exemple, vous pouvez dire
        "scroll down", "search google", "play video", etc.
      </p>
      <pre>
        <code>
          import <b>webVoiceHub</b> from 'web-speech-api'; webVoiceHub(); //
          Initialisation de la reconnaissance vocale
        </code>
      </pre>

      <h2>Liste des Commandes Vocales</h2>
      <ul>
        <li>"go back"</li>
        <li>"scroll down"</li>
        <li>"scroll up"</li>
        {/* ... Ajoutez le reste des commandes ici */}
      </ul>
    </div>
  );
};
