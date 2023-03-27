import React from 'react';
import './clavier.css';

export const Clavier = ({ onClickLettre, lettresTrouvees }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div className="clavier">
      {alphabet.split('').map((lettre) => ( //créer un tableau qui permet de créer pour chaque lettre l'élement bouton
        <button className="clavier-button"
          key={lettre}
          onClick={() => onClickLettre(lettre)}
          disabled={lettresTrouvees.has(lettre)}  //rend les lettres correcte non-cliquable après avoir déjà cliqué dessus
        >
          {lettre}
        </button>
      ))}
    </div>
  );
};

