import React from "react";
import GroundAttacks from "./components/GroundAttacks";
import AerialAttacks from "./components/AerialAttacks";
import SpecialAttacks from "./components/SpecialAttacks";
import Grabs from "./components/Grabs";
import Throws from "./components/Throws";
import DodgesRolls from "./components/DodgesRolls";

import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title-with-icons">
        <img src="/public/hbox.jpeg" alt="hgod image" className="hbox-icon" />
        <span>Jigglypuff Frame Data</span>
        <img src="/public/hbox.jpeg" alt="hgod image" className="hbox-icon" />
      </h1>
  
      <GroundAttacks />
      <AerialAttacks />
      <SpecialAttacks />
      <Grabs />
      <Throws />
      <DodgesRolls />
    </div>
  );
}
