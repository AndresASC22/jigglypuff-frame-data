import React from "react";
import CategorySection from "./CategorySection";

export default function DodgesRolls({ data, onMoveClick }) {
  return (
    <CategorySection
      title="Dodges / Rolls"
      moves={data?.DodgesRolls || []}
      onMoveClick={onMoveClick}
    />
  );
}
