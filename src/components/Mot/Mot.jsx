import React from 'react';
import './mot.css';

export const Mot = ({ mot, lettresTrouvees }) => {
  const afficherLettre = (lettre) => {
    if (lettresTrouvees.has(lettre)) { // si la lettre qu'on clique est bonne, renvoi la lettre à la place du '_' (non c'est pas un smiley)
      return lettre;
    }
    return '_'; //si la lettre sur laquelle on clique n'est pas bonne, ça reste '_'
  };

  return (
    <div className="mot">
      {mot.split('').map((lettre, index) => ( //on met un span entre chaque lettres
      <span className='lettre' key={index}>{afficherLettre(lettre)} </span>
      ))}
    </div>
  );
};