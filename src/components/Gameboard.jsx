import { useEffect, useState } from 'react';
import Cards from './Card';
import Scoreboard from './Scoreboard';
import '../styles/Gameboard.css';

const Gameboard = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const setcurrentScoreFunc = () => {
    setCurrentScore((old) => old + 1);
  };

  const newRound = () => {
    if (currentScore > highestScore) {
      setHighestScore(currentScore);
    }
    setCurrentScore(0);
  };

  return (
    <div className="Gameboard">
      <Scoreboard
        currentScore={currentScore}
        highestScore={highestScore}
      ></Scoreboard>
      <Cards setCurrentScore={setcurrentScoreFunc} newRound={newRound}></Cards>
    </div>
  );
};

export default Gameboard;
