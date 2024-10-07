const texteEcran = document.getElementById("texte");
const boutonsOptions = document.getElementById("options")

// state machine / machine à état

function jeuDebut() {
  // initialiser le jeu avec le premier noeud
  afficheNoeudTexte(0);
}

/* fonction qui affiche le texte et les boutons */
function afficheNoeudTexte(noeudIndex) {

  // supprimer tous les élements boutons
  boutonsOptions.replaceChildren();

  // récupérer dans la base le noeud correspond
  const noeudTexte = noeudTexteBase.find(
    function(noeudTexte) {
      return noeudTexte.id === noeudIndex;
    }
  );

  // on affiche le texte qui correspond
  texteEcran.innerText = noeudTexte.texte;

  // à partir du noeud on crée les boutons correspondants
  noeudTexteBase[noeudIndex].choix.forEach(function(option) {

    // on crée le bouton
    const bouton = document.createElement("button");

    // on remplace le texte du bouton
    bouton.innerText = option.texte;

    // on ajoute le bouton au bloc boutons
    boutonsOptions.appendChild(bouton);

    // quand on clique on change d'état pour avancer
    bouton.addEventListener("click", function () {
      selectionOption(option)
    });

  })

}

function selectionOption(option) {
  const noeudTexteSuivant = option.texteSuivant;
  console.log("noeud suivant", noeudTexteSuivant)
  afficheNoeudTexte(noeudTexteSuivant);
}

const noeudTexteBase = [
  {
    id: 0,
    texte: "Vous arrivez devant votre maison d'enfance",
    choix: [
      {
        texte: "Vous garez votre voiture devant le garage",
        defEtat: { voiture: true },
        texteSuivant: 1
      },
      {
        texte: "Vous fuyez car vous detestez cet endroit",
        texteSuivant: 2
      },
    ]
  },
  {
    id: 1,
    texte: "Vous vous dirigez vers la porte d'entrée",
    choix: [
      {
        texte: "Vous changez d'avis et vous partez en courant",
        texteSuivant: 2
      },
      {
        texte: "Vous ouvrez la porte doucement",
        texteSuivant: 3
      },
    ]
  },
  {
    id: 2,
    texte: "Vous quittez la ville, le jeu est fini.",
    choix: []
  },
  {
    id: 3,
    texte: "Vous entrez dans le hall. La lumière est éteinte.",
    choix: []
  }
]

jeuDebut();
