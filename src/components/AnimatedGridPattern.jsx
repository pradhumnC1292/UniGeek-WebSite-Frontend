import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./AnimatedGridPattern.css";

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className = "",
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}) {
  const id = useId(); // unique <pattern> id
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeoutRef = useRef(null);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // generate initial squares once we know dimensions
  const getPos = () => {
    if (!dimensions.width || !dimensions.height) return [0, 0];
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  };

  // Random color selection from your brand colors
  const getRandomColor = () => {
    const colors = ["#7843fc9b", "#5b47b0"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const generateSquares = (count) =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
      color: getRandomColor(),
    }));

  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  const updateSquarePosition = (squareId) => {
    // Skip animation updates on mobile for better performance
    if (isMobile) return;

    setSquares((current) =>
      current.map((sq) =>
        sq.id === squareId
          ? { ...sq, pos: getPos(), color: getRandomColor() }
          : sq
      )
    );
  };

  // update grid when container resizes (debounced for performance)
  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      // Clear previous timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      // Debounce resize updates
      resizeTimeoutRef.current = setTimeout(() => {
        for (const entry of entries) {
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      }, 150); // 150ms debounce
    });

    if (containerRef.current) ro.observe(containerRef.current);
    return () => {
      ro.disconnect();
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // regenerate squares when we first have dimensions or numSquares changes
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions.width, dimensions.height, numSquares]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={`agp-svg ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      {/* grid background */}
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* animated squares */}
      <svg x={x} y={y} className="agp-overflow-visible">
        {squares.map(({ pos: [gx, gy], id, color }, index) => (
          <motion.rect
            key={`${gx}-${gy}-${id}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration: isMobile ? duration * 1.5 : duration, // Slower animation on mobile
              repeat: isMobile ? 0 : 1, // No repeat on mobile
              delay: index * 0.1,
              repeatType: "reverse",
              repeatDelay,
              ease: "easeInOut", // Smoother easing
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            width={width - 1}
            height={height - 1}
            x={gx * width + 1}
            y={gy * height + 1}
            fill={color}
            className="agp-animated-rect"
            style={{ willChange: isMobile ? "auto" : "opacity" }} // Performance hint
          />
        ))}
      </svg>
    </svg>
  );
}
