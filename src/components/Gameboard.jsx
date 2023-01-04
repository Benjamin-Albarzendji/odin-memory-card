import { useEffect, useState } from 'react';
import Cards from './Card';
import '../styles/Gameboard.css';

const Gameboard = () => {

const testing = () => {
    alert("Wow")
}


  return (
    <div className="Gameboard">
      <Cards function = {testing}></Cards>
    </div>
  );
};

export default Gameboard;
