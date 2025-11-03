import React from "react";
import MoveCard from "./MoveCard";

export default function CategorySection({ title, moves }) {
  return (
    <section className="category-section">
      <h2>{title}</h2>
      <div className="move-list">
        {moves.map((move, index) => (
          <MoveCard key={index} move={move} />
        ))}
      </div>
    </section>
  );
}
