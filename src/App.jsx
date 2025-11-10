import React, { useState, useEffect } from "react";
import GroundAttacks from "./components/GroundAttacks";
import AerialAttacks from "./components/AerialAttacks";
import SpecialAttacks from "./components/SpecialAttacks";
import Grabs from "./components/Grabs";
import Throws from "./components/Throws";
import DodgesRolls from "./components/DodgesRolls";
import FrameViewer from "./components/FrameViewer";

import "./style.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [activeMove, setActiveMove] = useState(null); // Move currently viewed in FrameViewer


  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleMoveClick = (move) => {
    setActiveMove(move);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title-with-icons">
          <img src="hbox.jpeg" alt="Hbox icon" className="hbox-icon" />
          <span>Jigglypuff Frame Data</span>
          <img src="hbox.jpeg" alt="Hbox icon" className="hbox-icon" />
        </h1>
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "☀️ Light Mode" : "🌉 Dark Mode"}
        </button>
      </div>
      <div className="note">
        NOTE:You can click on the image to go frame by frame (if GIFS are available).
      </div>
      <GroundAttacks onMoveClick={handleMoveClick} />
      <AerialAttacks onMoveClick={handleMoveClick} />
      <SpecialAttacks onMoveClick={handleMoveClick} />
      <Grabs onMoveClick={handleMoveClick} />
      <Throws onMoveClick={handleMoveClick} />
      <DodgesRolls onMoveClick={handleMoveClick} />

      {activeMove && (
        <FrameViewer move={activeMove} onClose={() => setActiveMove(null)} />
      )}
    </div>
  );
}
