import React from "react";
import moveData from "../data/jigglypuffFrameData.json";
import MoveCard from "./MoveCard";

export default function GroundAttacks() {
  const groundMoves = moveData.GroundAttacks;

  return (
    <div className="ground-attacks">
      <h2>Ground Attacks</h2>
      <div className="move-list">
        {groundMoves.map((move, index) => (
          <MoveCard key={index} move={move} />
        ))}
      </div>
    </div>
  );
}
