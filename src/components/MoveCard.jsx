import React from "react";

function formatActiveFrames(activeFrames) {
  if (!Array.isArray(activeFrames) || activeFrames.length < 2) return null;
  return `${activeFrames[0]}–${activeFrames[1]}f`;
}

function formatBaseDamage(baseDamage) {
  if (baseDamage === null || baseDamage === undefined) return null;

  // Marth: "6 / 4" should display exactly as-is
  if (typeof baseDamage === "string") return baseDamage;

  // If you ever use a number later
  if (typeof baseDamage === "number") return `${baseDamage}`;

  // If you ever use [6,4] later
  if (Array.isArray(baseDamage)) {
    const [a, b] = baseDamage;
    if (a == null && b == null) return null;
    if (b == null) return `${a}`;
    return `${a} / ${b}`;
  }

  // If you ever switch to { tipper: 6, sourspot: 4 }
  if (typeof baseDamage === "object") {
    const tipper = baseDamage.tipper ?? baseDamage.strong;
    const sour = baseDamage.sourspot ?? baseDamage.sour ?? baseDamage.weak;
    if (tipper == null && sour == null) return null;
    if (sour == null) return `${tipper}`;
    if (tipper == null) return `${sour}`;
    return `${tipper} / ${sour}`;
  }

  return String(baseDamage);
}

export default function MoveCard({ move = {}, onMoveClick }) {
  const name = move.name ?? "Unknown Move";
  const hasFrames = Array.isArray(move.frames) && move.frames.length > 0;

  const activeText = formatActiveFrames(move.activeFrames);
  const baseDamageText = formatBaseDamage(move.baseDamage);

  return (
    <div className="move-card">
      <h3>{name}</h3>

      <div className="gif-container">
        {move.gif ? (
          <img
            src={move.gif}
            alt={`${name} animation`}
            className="move-gif"
            onClick={() => {
              // Only open FrameViewer if this move actually has frames
              if (hasFrames) onMoveClick?.(move);
            }}
            style={{ cursor: hasFrames ? "pointer" : "default" }}
          />
        ) : (
          <div className="no-gif">No GIF available</div>
        )}
      </div>

      <ul>
        {move.startupFrames != null && (
          <li>
            <strong>Startup:</strong> {move.startupFrames}f
          </li>
        )}

        {activeText && (
          <li>
            <strong>Active:</strong> {activeText}
          </li>
        )}

        {move.totalFrames != null && (
          <li>
            <strong>Total Frames:</strong> {move.totalFrames}
          </li>
        )}

        {move.IASA != null && (
          <li>
            <strong>IASA:</strong> {move.IASA}
          </li>
        )}

        {move.shieldStun != null && (
          <li>
            <strong>Shield Stun:</strong> {move.shieldStun}
          </li>
        )}

        {baseDamageText != null && (
          <li>
            <strong>Base Damage:</strong> {baseDamageText}
          </li>
        )}

        {move.notes && (
          <li>
            <em>{move.notes}</em>
          </li>
        )}
      </ul>
    </div>
  );
}
