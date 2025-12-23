import React from "react";
import MoveCard from "./MoveCard";

export default function CategorySection({ title, moves = [], onMoveClick }) {
  return (
    <div className="move-section">
      <h2>{title}</h2>

      <div className="move-list">
        {Array.isArray(moves) && moves.length > 0 ? (
          moves.map((move, idx) => (
            <MoveCard
              key={`${move?.name ?? "move"}-${idx}`}
              move={move}
              onMoveClick={onMoveClick}
            />
          ))
        ) : (
          <p style={{ opacity: 0.7, textAlign: "center" }}>No moves yet.</p>
        )}
      </div>
    </div>
  );
}
