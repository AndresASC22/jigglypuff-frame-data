import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import CategorySection from "./CategorySection";

export default function GroundAttacks() {
  return (
    <CategorySection
      title="Ground Attacks"
      moves={moveData.GroundAttacks}
    />
  );
}
