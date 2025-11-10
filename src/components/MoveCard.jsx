import React from "react";

export default function MoveCard({ move, onMoveClick }) {
  return (
    <div className="move-card">
      <h3>{move.name}</h3>
      <div
        className="gif-container"
        onClick={() => onMoveClick && onMoveClick(move)}
      >
        {move.gif ? (
          <img src={move.gif} alt={`${move.name} animation`} className="move-gif" />
        ) : (
          <div className="no-gif">No GIF available</div>
        )}
      </div>

      <ul>
        <li><strong>Startup:</strong> {move.startupFrames}f</li>
        <li>
          <strong>Active:</strong> {move.activeFrames[0]}–{move.activeFrames[1]}f
        </li>
        <li><strong>Total Frames:</strong> {move.totalFrames}</li>
        {move.IASA && <li><strong>IASA:</strong> {move.IASA}</li>}
        {move.AutoCancel && <li><strong>Auto Cancel:</strong> {move.AutoCancel}</li>}
        {move.shieldStun && <li><strong>Shield Stun:</strong> {move.shieldStun}</li>}
        {move.baseDamage && <li><strong>Base Damage:</strong> {move.baseDamage}%</li>}
        {move.notes && <li><em>{move.notes}</em></li>}
      </ul>
    </div>
  );
}
