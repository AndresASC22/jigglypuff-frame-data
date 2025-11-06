import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function GroundAttacks({ onMoveClick }) {
  return (
    <CategorySection
      title="Ground Attacks"
      moves={moveData.GroundAttacks}
      onMoveClick={onMoveClick}
    />
  );
}
