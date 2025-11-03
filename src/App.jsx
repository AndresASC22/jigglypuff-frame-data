import React from "react";
import GroundAttacks from "./components/GroundAttacks";
import AerialAttacks from "./components/AerialAttacks";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Jigglypuff Frame Data</h1>
      <GroundAttacks />
      <AerialAttacks />
    </div>
  );
}
