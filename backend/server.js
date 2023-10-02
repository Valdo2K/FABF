const express = require('express');
const app = express();
const port = 8080; // Choisissez un port approprié

app.get('/', (req, res) => {
  res.send('Hello World!'); // Réponse pour la route principale
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
