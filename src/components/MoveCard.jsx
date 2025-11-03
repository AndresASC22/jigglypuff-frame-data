import React from "react";

export default function MoveCard({ move }) {
  return (
    <div className="move-card">
      <h3>{move.name}</h3>
      <ul>
        <li><strong>Startup:</strong> {move.startupFrames}f</li>
        <li><strong>Active:</strong> {move.activeFrames[0]}–{move.activeFrames[1]}f</li>
        <li><strong>Total Frames:</strong> {move.totalFrames}</li>
        {move.IASA && <li><strong>IASA:</strong> {move.IASA}</li>}
        <li><strong>Shield Stun:</strong> {move.shieldStun}</li>
        <li><strong>Base Damage:</strong> {move.baseDamage}%</li>
        {move.baseDamageWeak && <li><strong>Weak Hit:</strong> {move.baseDamageWeak}%</li>}
        {move.LandingLag && <li><strong>Landing Lag:</strong> {move.LandingLag}f</li>}
        {move.LCancelLag && <li><strong>L-Cancel Lag:</strong> {move.LCancelLag}f</li>}
        {move.AutoCancel && <li><strong>Auto Cancel:</strong> {move.AutoCancel}</li>}
        {move.notes && <li><em>{move.notes}</em></li>}
      </ul>
    </div>
  );
}
