import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function AerialAttacks({ onMoveClick }) {
  return (
    <CategorySection
      title="Aerial Attacks"
      moves={moveData.AerialAttacks}
      onMoveClick={onMoveClick}
    />
  );
}
