import React from "react";
import CategorySection from "./CategorySection";

export default function Grabs({ data, onMoveClick }) {
  return (
    <CategorySection
      title="Grabs"
      moves={data?.Grabs || []}
      onMoveClick={onMoveClick}
    />
  );
}
