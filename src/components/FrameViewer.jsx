import React, { useState } from "react";
import "./FrameViewer.css";

export default function FrameViewer({ move, onClose }) {
  const [currentFrame, setCurrentFrame] = useState(0);

  if (!move.frames || move.frames.length === 0) {
    return (
      <div className="frame-viewer-overlay" onClick={onClose}>
        <div className="frame-viewer-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>✖</button>
          <p>No frame data available for this move.</p>
        </div>
      </div>
    );
  }

  const nextFrame = () => {
    setCurrentFrame((prev) => (prev + 1) % move.frames.length);
  };

  const prevFrame = () => {
    setCurrentFrame((prev) =>
      prev === 0 ? move.frames.length - 1 : prev - 1
    );
  };

  return (
    <div className="frame-viewer-overlay" onClick={onClose}>
      <div
        className="frame-viewer-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>✖</button>

        <h2 className="frame-title">{move.name} — Frame {currentFrame + 1}</h2>
        <img
          src={move.frames[currentFrame]}
          alt={`Frame ${currentFrame + 1} of ${move.name}`}
          className="frame-image"
        />

        <div className="frame-controls">
          <button onClick={prevFrame}>⬅ Prev Frame</button>
          <button onClick={nextFrame}>Next Frame ➡</button>
        </div>
      </div>
    </div>
  );
}
