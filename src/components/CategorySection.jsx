import React from "react";
import MoveCard from "./MoveCard";

export default function CategorySection({ title, moves, onMoveClick }) {
  return (
    <div className="move-section">
      <h2 className="category-title">{title}</h2>
      <div className="move-list">
        {moves.map((move) => (
          <MoveCard
            key={move.name}
            move={move}
            onMoveClick={onMoveClick}
          />
        ))}
      </div>
    </div>
  );
}
