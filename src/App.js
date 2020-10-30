import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [Min, setMin] = useState(0);
  const [Max, setMax] = useState(100);
  const [Random, setRandom] = useState(
    Math.floor(Math.random() * (Max - Min + 1) + Min)
  );

  const RandomNumberHandler = () => {
    setRandom((prev) => Math.floor(Math.random() * (Max - Min + 1) + Min));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="random-number">
          <p>
            Random Number:<span>{Random}</span>
          </p>
        </div>
        <div className="number-container">
          <div>
            <p>Min</p>
            <input
              type="number"
              value={Min}
              onChange={(e) => setMin(+e.target.value)}
            />
          </div>
          <div>
            <p>Max</p>
            <input
              type="number"
              value={Max}
              onChange={(e) => setMax(+e.target.value)}
            />
          </div>
        </div>
        <button onClick={RandomNumberHandler}>Generate Number</button>
      </div>
    </div>
  );
}
