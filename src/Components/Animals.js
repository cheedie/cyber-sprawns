import React from "react";
import { spawns } from "./AboutSpawns";
import usp from "../assets/usp2.png";

export default function Animals() {
  function myRandomInts(quantity, max) {
    const arr = [];
    while (arr.length < quantity) {
      var candidateInt = Math.floor(Math.random() * max) + 1;
      if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
    }
    return arr;
  }
  return (
    <div>
      <div className="animals">
        {myRandomInts(2, 5).map((num, i) => {
          return (
            <div key={num} className={`animal${i + 1}`}>
              <img alt={spawns[num - 1].alt} src={spawns[num - 1].src} />
              <span>{spawns[num - 1].text}</span>
            </div>
          );
        })}

        <div className="animal3">
          <img src={usp} alt="usp" />
        </div>
      </div>
    </div>
  );
}
