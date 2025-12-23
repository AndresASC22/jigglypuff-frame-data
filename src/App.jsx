import React, { useMemo, useState, useEffect } from "react";
import JigglypuffData from "./data/jigglypuffFrameData.json";
import MarthData from "./data/marthFrameData.json";

import GroundAttacks from "./components/GroundAttacks";
import AerialAttacks from "./components/AerialAttacks";
import SpecialAttacks from "./components/SpecialAttacks";
import Grabs from "./components/Grabs";
import Throws from "./components/Throws";
import DodgesRolls from "./components/DodgesRolls";
import FrameViewer from "./components/FrameViewer";

import "./style.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [selectedChar, setSelectedChar] = useState("Jigglypuff");
  const [activeMove, setActiveMove] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const characterData = useMemo(() => {
    const map = {
      Jigglypuff: JigglypuffData,
      Marth: MarthData
    };
    return map[selectedChar];
  }, [selectedChar]);

  const handleMoveClick = (move) => {
    if (move?.frames?.length) setActiveMove(move);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title-with-icons">
          <img src="/hbox.jpeg" alt="Hbox icon" className="hbox-icon" />
          <span>{selectedChar} Frame Data</span>
          <img src="/hbox.jpeg" alt="Hbox icon" className="hbox-icon" />
        </h1>

        <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <select value={selectedChar} onChange={(e) => setSelectedChar(e.target.value)}>
            <option>Jigglypuff</option>
            <option>Marth</option>
          </select>

          <button className="dark-mode-toggle" onClick={() => setDarkMode((p) => !p)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>

      {/* pass characterData into each section */}
      <GroundAttacks data={characterData} onMoveClick={handleMoveClick} />
      <AerialAttacks data={characterData} onMoveClick={handleMoveClick} />
      <SpecialAttacks data={characterData} onMoveClick={handleMoveClick} />
      <Grabs data={characterData} onMoveClick={handleMoveClick} />
      <Throws data={characterData} onMoveClick={handleMoveClick} />
      <DodgesRolls data={characterData} onMoveClick={handleMoveClick} />

      {activeMove && <FrameViewer move={activeMove} onClose={() => setActiveMove(null)} />}
    </div>
  );
}
