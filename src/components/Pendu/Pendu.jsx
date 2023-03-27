import React, { useState, useEffect } from 'react';
import './pendu.css';

import { Mot } from '../Mot/Mot';
import { Clavier } from '../Clavier/Clavier';

export const Pendu = () => {
  const [mot, setMot] = useState(""); //setMot permet d'update la variable mot
  const [lettresTrouvees, setLettresTrouvees] = useState(new Set()); //set utilisé pour lettres uniques
  const [gagne, setGagne] = useState(false); // ajout d'une nouvelle variable d'état
  const [erreurs, setErreurs] = useState(0);
  const erreursMax = 10;

  const options = {
    "locale": "fr-FR"
  };


  const recupMot = async () => { //pour utiliser await
    const reponse = await fetch('http://localhost:3001/', options);
    const data = await reponse.json(); //récupère la réponse pour javascript
    const mot = data.word.toUpperCase();
    console.log(mot) //ceci permet d'afficher le mot pour le debug (c'est le deuxième mot qu'il faut prendre sur version dev)
    return mot;
  };

  const choisirMot = async () => {
    const motTrouve = await recupMot();
    if (motTrouve) { //vérifie si un mot de l'api a bien été sélectionné
      setMot(motTrouve);
    }
  };

  const defaite = erreurs >= erreursMax; // on a perdu

  const lettreTrouvee = (lettre) => {
    if (!(defaite)) {
      if (mot.includes(lettre)) {
        setLettresTrouvees((prevState) => new Set([...prevState, lettre]));
      } else {
        setErreurs((prevState) => prevState + 1); // compteur nombre d'erreurs
      }
    }
  };


  const verifierGagne = () => {
    for (const lettre of mot) {
      if (!lettresTrouvees.has(lettre)) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => { //Permet une exécution à un instant précis, plus optimisé
    choisirMot();
  }, []); //chaque fois qu'on lance il exécute la fonction choisirMot

  useEffect(() => {
    if (mot) {
      setGagne(verifierGagne());
    }
  }, [lettresTrouvees, mot]); //dès que mot ou lettresTrouvees changent il exécute verifierGagne

  return (
    <div>
      <h1 className='titre'>Pendu</h1>
      <Mot mot={mot} lettresTrouvees={lettresTrouvees} />
      <Clavier onClickLettre={lettreTrouvee} lettresTrouvees={lettresTrouvees} />
      <p className='erreurs'>Erreurs : {erreurs}/{erreursMax}</p>
      {gagne ? gagne && <div className='contain-score'><p className='score'>Victoire !</p> <button className='rejouer' onClick={() => window.location.reload()}>Rejouer</button> </div> : defaite && <div className='contain-score'><p className='score'>Défaite !</p> <button className='rejouer' onClick={() => window.location.reload()}>Rejouer</button> </div> /* si gagne est true renvoie Victoire sinon Défaite*/}
    </div>
  );
};