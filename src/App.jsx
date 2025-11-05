import React from "react";
import GroundAttacks from "./components/GroundAttacks";
import AerialAttacks from "./components/AerialAttacks";
import SpecialAttacks from "./components/SpecialAttacks";
import Grabs from "./components/Grabs";

import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Jigglypuff Frame Data</h1>
      <GroundAttacks />
      <AerialAttacks />
      <SpecialAttacks />
      <Grabs />
    </div>
  );
}
