import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function DodgesRolls({ onMoveClick }) {
  return (
    <CategorySection
      title="Dodges/Rolls"
      moves={moveData.DodgesRolls}
      onMoveClick={onMoveClick}
    />
  );
}
