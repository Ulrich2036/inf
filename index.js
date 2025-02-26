const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const { name, age, gender, maritalStatus, dob, email, password } = req.body;
    // Traitez les données ici (par exemple, en les enregistrant dans une base de données)
    console.log(`Nom: ${name}, Âge: ${age}, Sexe: ${gender}, Situation Matrimoniale: ${maritalStatus}, Date de Naissance: ${dob}, Email: ${email}, Mot de Passe: ${password}`);
    res.send('Formulaire reçu, merci !');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
