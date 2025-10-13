import React, { useMemo, useRef } from "react";
import { useDimensions } from "../hooks/useDebouncedDimensions";
import "./AnimatedGradient.css";

export function AnimatedGradient({ colors, speed = 5, blur = "light" }) {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light"
      ? "blur-light"
      : blur === "medium"
      ? "blur-medium"
      : "blur-heavy";

  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div ref={containerRef} className="gradient-root">
      <div className={`gradient-layer ${blurClass}`}>
        {colors.map((color, i) => (
          <svg
            key={i}
            className="gradient-shape"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 50}%`,
              "--background-gradient-speed": `${1 / speed}s`,
            }}
            width={circleSize * randomInt(0.5, 1.5)}
            height={circleSize * randomInt(0.5, 1.5)}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="50" fill={color} opacity="0.3" />
          </svg>
        ))}
      </div>
    </div>
  );
}
