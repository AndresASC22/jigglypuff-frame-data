import React from "react";
import CategorySection from "./CategorySection";

export default function Throws({ data, onMoveClick }) {
  return (
    <CategorySection
      title="Throws"
      moves={data?.Throws || []}
      onMoveClick={onMoveClick}
    />
  );
}
