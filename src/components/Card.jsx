import { useEffect, useState } from 'react';
import '../styles/Card.css';

import bb8 from '../img/bb8.png';
import c3po from '../img/c3po.png';
import chewbacca from '../img/chewbacca.png';
import finn from '../img/finn.png';
import leia from '../img/leia.png';
import obiwan from '../img/obiwan.png';
import r2d2 from '../img/r2d2.png';
import ren from '../img/ren.png';
import solo from '../img/solo.png';
import stormtrooper from '../img/stormtrooper.png';

const Cards = (props) => {
  // Creates an object for every avatar to use rather than having several different states
  const [cards, setCards] = useState([
    { src: bb8, name: 'BB-8', key: 'bb8' },
    { src: c3po, name: 'C3-PO', key: 'c3po' },
    { src: chewbacca, name: 'Chewbacca', key: 'chewbacca' },
    { src: finn, name: 'Finn', key: 'finn' },
    { src: leia, name: 'Leia', key: 'leia' },
    { src: obiwan, name: 'Obi-Wan', key: 'obi' },
    { src: r2d2, name: 'R2-D2', key: 'r2' },
    { src: ren, name: 'Kylo-Ren', key: 'ren' },
    { src: solo, name: 'Han Solo', key: "solo" },
    { src: stormtrooper, name: 'Stormtrooper', key: 'trooper' },
  ]);

  // This forces the UI to update, and is only there for that purpose
  const [clickedAvatars, setClickedAvatars] = useState([]);

  let test = props.testing
  test()

  const handleClick = (e) => {
    console.log(e.target.id);
    let array = cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setCards((a) => array);

    // This forces the UI to update
    let tempClicked = clickedAvatars;
    tempClicked.push(e.target.id)
    setClickedAvatars(tempClicked);
  };

  return (
    <div className="cardsContainer">
      {cards.map((avatar) => (
        <div className="Card" key={avatar.key} onClick={handleClick}>
          <a>
            <img alt={avatar.name} src={avatar.src} id={avatar.key}></img>
          </a>
          <div className="name">{avatar.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
