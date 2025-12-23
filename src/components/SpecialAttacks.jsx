import React from "react";
import CategorySection from "./CategorySection";

export default function SpecialAttacks({ data, onMoveClick }) {
  return (
    <CategorySection
      title="Special Attacks"
      moves={data?.SpecialAttacks || []}
      onMoveClick={onMoveClick}
    />
  );
}
