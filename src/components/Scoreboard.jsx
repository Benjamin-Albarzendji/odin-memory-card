import { useEffect, useState } from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = (props) => {
  return (
    <div className="Scoreboard">
      <div className="Current">Current Score: {props.currentScore} </div>
      <div className="Record">Highest Score: {props.highestScore}</div>
    </div>
  );
};

export default Scoreboard;
