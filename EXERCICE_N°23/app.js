/*
Module : JavaScript
Exercice n°23 - Stockage local

Durée de l’exercice : 30min
 
LocalStorage
Écrivez un code JavaScript pour sauvegarder un tableau de données dans le localstorage, récupérer les données du localstorage et le journal de la console.

Objectif : Enregistrer et récupérer des données dans le localstorage.
JSON.stringify(), JSON.parse

Énoncé : L'objet localStorage permet d'enregistrer des paires clé/valeur dans le navigateur.
●	Enregistrer des données dans le stockage local
●	Lire les données du stockage local
●	Supprimer des données du stockage local
●	Tout supprimer (effacer le stockage local)

Code HTML :

<body>
    <h1>ES6</h1>
    <!-- javascript -->
    <script src="app.js"></script>
</body>

Exercice relatif au DOM à compléter
1.	Écrire un programme pour changer l'arrière-plan d'un document en cliquant sur le bouton. Utilisez le code couleur hexadécimal.

2.	Écrire un programme de compteur avec 3 boutons (augmentation, diminution et remise à zéro).

3.	Construire un jeu de devinettes sur les nombres. 
Exigences :
●	Un utilisateur a cinq essais pour deviner le nombre, entre 1-100, que l'ordinateur a choisi.
●	À chaque fois qu'il devine, il faut lui dire si son estimation est trop élevée ou trop basse.
●	Après leur troisième essai, révélez-leur le nombre choisi par l'ordinateur et faites-leur savoir s'ils l'ont bien ou mal choisi.
●	Utilisez un formulaire HTML pour créer un champ de saisie dans lequel l'utilisateur pourra entrer son estimation.
●	Ajoutez un bouton "Submit" au formulaire et utilisez l'attribut "onsubmit" pour appeler votre fonction JavaScript.

4.	Construisez un quiz de cinq questions.
Exigences :
●	Créez un formulaire HTML avec un quiz de cinq questions.
●	Chaque question doit comporter quatre réponses à choix multiple.
●	Lorsque l'utilisateur soumet le quiz, ajoutez un message sous chaque question pour lui faire savoir s'il a bien ou mal répondu (donnez-lui la bonne réponse).
●	À la fin du quiz, affichez le résultat eb. 2 correct / sur 5

*/

// 1-
const btn = document.createElement("button"); // création et selection d'un <Button>
const bodi = document.querySelector("body"); // selection de l'élement <body>
bodi.appendChild(btn); // insertion du btn dans body
btn.textContent = "Button"; // nomination du btn
btn.addEventListener("click", () => {
  bodi.style.backgroundColor = "#88f";
}); // quand on clique le btn, l'arrière plan du body change de couleur

// 2-
const btn1 = document.createElement("button"); // création et pointage du btn1
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const div = document.createElement("div"); // création et pointage d'un <div></div>
const span = document.createElement("span"); // création et pointage d'un <span></span> (coquille du compteur)
btn1.textContent = "UP"; // commande augmentation compteur (nomination btn1)
btn2.textContent = "DOWN"; // commande diminution compteur
btn3.textContent = "RESET"; // remise à zero compteur
span.textContent = "0";
div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3); // intégration btn3 dans div
div.appendChild(span);
bodi.appendChild(div); // intégration div dans le body (dans le document)
div.style.marginTop = "30px";
btn2.style.margin = "0 15px"; // positionnement des éléments
span.style.border = "1px solid #000"; // cadrage du compteur
span.style.padding = "1px 5px"; // rectification de la taille du compteur
span.style.marginLeft = "15px";
btn1.addEventListener("click", () => {
  span.textContent++;
}); // à chaque click du btn1 : compteur + 1
btn2.addEventListener("click", () => {
  if (span.textContent > 0) {
    span.textContent--;
  } else {
    span.textContent = 0;
  }
}); // si compteur > 0, à chaque click du btn2 : compteur - 1; sinon, compteur = 0
btn3.addEventListener("click", () => {
  span.textContent = 0;
}); // remise à zero du compteur

// 3-
const div1 = document.createElement("div"); // création d'un div pour contenir le jeu de devinettes
const span1 = document.createElement("span"); // création et pointage d'un <span></span> (coquille du nombre choisi par l'ordinateur)
bodi.appendChild(div1); // intégration div1 dans le body
div1.style.marginTop = "30px";
span1.style.border = "1px solid #000"; // cadrage du span1
span1.style.padding = "1px 5px";
div1.appendChild(span1);
span1.textContent = Math.trunc(Math.random() * 100);
span1.style.visibility = "hidden";

console.log(span1.textContent); // le joueur ne voit pas cette valeur
const div2 = document.createElement("div"); // création d'un div pour contenir le formulaire destiné pour l'utilisateur
bodi.appendChild(div2);
const form = document.createElement("form"); // creation formulaire pour le joueur
div2.appendChild(form);
div2.style.marginTop = "30px";
const inputn = document.createElement("input");
inputn.setAttribute("type", "number");
inputn.placeholder = "Devinez un nombre entre 1 et 100 inclus";
inputn.size = "40";
form.appendChild(inputn);
const submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.value = "submit";
form.appendChild(submit);
submit.style.marginLeft = "15px";
const inputt = document.createElement("input");
inputt.setAttribute("type", "text");
inputt.size = "8";
inputt.style.marginLeft = "15px";
form.appendChild(inputt);

let essai = 0; // un utilisateur a droit à cinq essais
onsubmit = (event) => {
  essai++;
  console.log(essai);
  if (essai < 5) {
    if (inputn.value == span1.textContent) {
      span1.style.visibility = "visible";
      submit.disabled = true;
      return (inputt.value = "Gagné");
    } else if (inputn.value > span1.textContent) {
      inputt.value = "Trop élevée";
    } else {
      inputt.value = "Trop basse";
    }
  } else {
    span1.style.visibility = "visible";
    if (inputn.value == span1.textContent) {
      submit.disabled = true;
      return (inputt.value = "Gagné");
    } else {
      submit.disabled = true;
      return (inputt.value = "mal choisi");
    }
  }
};

// 4-
const quiz = document.createElement("h1");
quiz.textContent = "QUIZ";
bodi.appendChild(quiz);
const formu = document.createElement("form");
bodi.appendChild(formu);

for (let i = 0; i < 5; i++) {
  // champ de texte pour la question
  let textfield = document.createElement("input");
  textfield.type = "text";
  textfield.setAttribute("id", "quest" + (i + 1));
  textfield.value = "Question n°" + (i + 1);
  textfield.style.display = "flex";
  textfield.style.marginTop = "40px";
  textfield.size = "28"; // dépend de la longueur du texte

  // champ de texte pour la réponse
  let textfield1 = document.createElement("input");
  textfield1.type = "text";
  textfield1.value = "Réponse n°" + (i + 1);
  textfield1.setAttribute("id", "rep" + (i + 1));
  textfield1.style.display = "flex";
  textfield1.style.marginTop = "10px";
  textfield1.size = "14";

  // champs de choix pour l'utilisateur
  let array = ["option1", "option2", "option3", "option4"];
  let selectList = document.createElement("select");
  selectList.setAttribute("id", "slect" + (i + 1));
  selectList.style.marginTop = "10px";
  for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("class", "opt" + (i + 1));
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
  }

  formu.appendChild(textfield);
  formu.appendChild(textfield1);
  formu.appendChild(selectList);
}

const submit1 = document.createElement("input");
submit1.setAttribute("type", "submit");
submit1.setAttribute("id", "submitQuiz");
submit1.value = "Envoyer";
submit1.style.display = "flex";
submit1.style.marginTop = "40px";
formu.appendChild(submit1);

/*

let compt = 0; // score de l'utilisateur
let textfield2 = document.createElement("input");
textfield2.type = "text";
textfield2.setAttribute("id", "result");
textfield2.value = compt + "/5";
textfield2.style.display = "flex";
textfield2.style.marginTop = "10px";
formu.appendChild(textfield2);

*/

const h11 = document.createElement("h1");
const score = document.createElement("span");
let point = 0;
score.textContent = "score = " + point + " pts/5";
score.style.border = "1px solid #000";
score.style.padding = "0 5px";
h11.appendChild(score);
//score.style.marginTop = "20px";
bodi.appendChild(h11);

const quest1 = document.querySelector("#quest1");
const quest2 = document.querySelector("#quest2");
const quest3 = document.querySelector("#quest3");
const quest4 = document.querySelector("#quest4");
const quest5 = document.querySelector("#quest5");

const rep1 = document.getElementById("rep1");
const rep2 = document.querySelector("#rep2");
const rep3 = document.querySelector("#rep3");
const rep4 = document.querySelector("#rep4");
const rep5 = document.querySelector("#rep5");
rep1.value = "option4"; // Réponse de la question n°1
rep2.value = "option1"; // Réponse de la question n°2
rep3.value = "option3"; // Réponse de la question n°3
rep4.value = "option4"; // Réponse de la question n°4
rep5.value = "option2"; // Réponse de la question n°5
rep1.style.visibility = "hidden";
rep2.style.visibility = "hidden";
rep3.style.visibility = "hidden";
rep4.style.visibility = "hidden";
rep5.style.visibility = "hidden";

const selet1 = document.querySelector("#slect1");
const selet2 = document.querySelector("#slect2");
const selet3 = document.querySelector("#slect3");
const selet4 = document.querySelector("#slect4");
const selet5 = document.querySelector("#slect5");
//const result = document.querySelector("#result");
submit1.addEventListener("click", () => {
  //textfield2.value = compt + "/5";
  if (selet1.value == rep1.value) {
    quest1.value = "Question n°1 / Réponse: option4";
    rep1.value = "Bonne réponse";
    rep1.style.backgroundColor = "#00f";
    rep1.style.color = "#fff";
    rep1.style.fontWeight = "bold";
    //textfield2.value = compt++ + "/5";
    point++;
    console.log(point);
    score.textContent = "score = " + point + " pts/5";
    //score.textContent++;
  } else {
    quest1.value = "Question n°1 / Réponse: option4";
    rep1.value = "Mauvaise réponse";
    rep1.style.backgroundColor = "#f00";
    rep1.style.color = "#fff";
    rep1.style.fontWeight = "bold";
  }

  if (selet2.value == rep2.value) {
    quest2.value = "Question n°2 / Réponse: option1";
    rep2.value = "Bonne réponse";
    rep2.style.backgroundColor = "#00f";
    rep2.style.color = "#fff";
    rep2.style.fontWeight = "bold";
    //textfield2.value = compt++ + "/5";
    point++;
    console.log(point);
    score.textContent = "score = " + point + " pts/5";
    //score.textContent++;
  } else {
    quest2.value = "Question n°2 / Réponse: option1";
    rep2.value = "Mauvaise réponse";
    rep2.style.backgroundColor = "#f00";
    rep2.style.color = "#fff";
    rep2.style.fontWeight = "bold";
  }

  if (selet3.value == rep3.value) {
    quest3.value = "Question n°3 / Réponse: option3";
    rep3.value = "Bonne réponse";
    rep3.style.backgroundColor = "#00f";
    rep3.style.color = "#fff";
    rep3.style.fontWeight = "bold";
    //textfield2.value = compt++ + "/5";
    point++;
    console.log(point);
    score.textContent = "score = " + point + " pts/5";
    //score.textContent++;
  } else {
    quest3.value = "Question n°3 / Réponse: option3";
    rep3.value = "Mauvaise réponse";
    rep3.style.backgroundColor = "#f00";
    rep3.style.color = "#fff";
    rep3.style.fontWeight = "bold";
  }

  if (selet4.value == rep4.value) {
    quest4.value = "Question n°4 / Réponse: option4";
    rep4.value = "Bonne réponse";
    rep4.style.backgroundColor = "#00f";
    rep4.style.color = "#fff";
    rep4.style.fontWeight = "bold";
    //textfield2.value = compt++ + "/5";
    point++;
    console.log(point);
    score.textContent = "score = " + point + " pts/5";
    //score.textContent++;
  } else {
    quest4.value = "Question n°4 / Réponse: option4";
    rep4.value = "Mauvaise réponse";
    rep4.style.backgroundColor = "#f00";
    rep4.style.color = "#fff";
    rep4.style.fontWeight = "bold";
  }

  if (selet5.value == rep5.value) {
    quest5.value = "Question n°5 / Réponse: option2";
    rep5.value = "Bonne réponse";
    rep5.style.backgroundColor = "#00f";
    rep5.style.color = "#fff";
    rep5.style.fontWeight = "bold";
    //textfield2.value = compt++ + "/5";
    point++;
    console.log(point);
    score.textContent = "score = " + point + " pts/5";
    //score.textContent++;
  } else {
    quest5.value = "Question n°5 / Réponse: option2";
    rep5.value = "Mauvaise réponse";
    rep5.style.backgroundColor = "#f00";
    rep5.style.color = "#fff";
    rep5.style.fontWeight = "bold";
  }

  rep1.style.visibility = "visible";
  rep2.style.visibility = "visible";
  rep3.style.visibility = "visible";
  rep4.style.visibility = "visible";
  rep5.style.visibility = "visible";
});
