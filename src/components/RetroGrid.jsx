import React from "react";
import "./RetroGrid.css";

/**
 * Props:
 * - className?: string
 * - angle?: number (default 65)
 */
export function RetroGrid({ className = "", angle = 65 }) {
  return (
    <div
      className={`retrogrid-root ${className}`}
      style={{ "--grid-angle": `${angle}deg` }}
    >
      <div className="retrogrid-plane">
        <div className="retrogrid-tiles" />
      </div>
      <div className="retrogrid-gradient" />
    </div>
  );
}
