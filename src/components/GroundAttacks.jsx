import React from "react";
import CategorySection from "./CategorySection";

export default function GroundAttacks({ data, onMoveClick }) {
  return (
    <CategorySection
      title="Ground Attacks"
      moves={data?.GroundAttacks || []}
      onMoveClick={onMoveClick}
    />
  );
}
