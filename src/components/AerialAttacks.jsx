import React from "react";
import CategorySection from "./CategorySection";

export default function AerialAttacks({ data, onMoveClick }) {
  return (
    <CategorySection
      title="Aerial Attacks"
      moves={data?.AerialAttacks || []}
      onMoveClick={onMoveClick}
    />
  );
}
