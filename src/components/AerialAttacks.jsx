// src/components/AerialAttacks.jsx
import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function AerialAttacks() {
  return (
    <CategorySection
      title="Aerial Attacks"
      moves={moveData.AerialAttacks}
    />
  );
}
