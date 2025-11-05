import React, { useState, useEffect } from "react";
import GroundAttacks from "./components/GroundAttacks";
import AerialAttacks from "./components/AerialAttacks";
import SpecialAttacks from "./components/SpecialAttacks";
import Grabs from "./components/Grabs";
import Throws from "./components/Throws";
import DodgesRolls from "./components/DodgesRolls";

import "./style.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load preference from localStorage if available
    return localStorage.getItem("darkMode") === "true";
  });

  // Update <body> class whenever dark mode changes
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <GroundAttacks />
      <AerialAttacks />
      <SpecialAttacks />
      <Grabs />
      <Throws />
      <DodgesRolls />
    </div>
  );
}
