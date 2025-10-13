import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BackgroundBeamsWithCollision.css";

export const BackgroundBeamsWithCollision = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen and window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Adjust durations and delays based on screen size
  const speedMultiplier = isMobile ? 0.6 : 1; // 40% faster on mobile

  // Get random positions across the screen width
  const getRandomX = (index) => {
    // Distribute beams more evenly across the screen
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1200;
    const section = (screenWidth / 8) * index; // Divide into 8 sections
    const randomOffset = Math.random() * (screenWidth / 8); // Random within section
    return section + randomOffset;
  };

  const beams = [
    {
      initialX: getRandomX(0),
      translateX: getRandomX(0),
      duration: 7 * speedMultiplier,
      repeatDelay: 3 * speedMultiplier,
      delay: 2 * speedMultiplier,
    },
    {
      initialX: getRandomX(1),
      translateX: getRandomX(1),
      duration: 3 * speedMultiplier,
      repeatDelay: 3 * speedMultiplier,
      delay: 4 * speedMultiplier,
    },
    {
      initialX: getRandomX(2),
      translateX: getRandomX(2),
      duration: 7 * speedMultiplier,
      repeatDelay: 7 * speedMultiplier,
      className: "beam-small",
    },
    {
      initialX: getRandomX(3),
      translateX: getRandomX(3),
      duration: 5 * speedMultiplier,
      repeatDelay: 14 * speedMultiplier,
      delay: 4 * speedMultiplier,
    },
    {
      initialX: getRandomX(4),
      translateX: getRandomX(4),
      duration: 11 * speedMultiplier,
      repeatDelay: 2 * speedMultiplier,
      className: "beam-large",
    },
    {
      initialX: getRandomX(5),
      translateX: getRandomX(5),
      duration: 4 * speedMultiplier,
      repeatDelay: 2 * speedMultiplier,
      className: "beam-medium",
    },
    {
      initialX: getRandomX(6),
      translateX: getRandomX(6),
      duration: 6 * speedMultiplier,
      repeatDelay: 4 * speedMultiplier,
      delay: 2 * speedMultiplier,
      className: "beam-small",
    },
  ];

  return (
    <>
      <div ref={parentRef} className={`bbc-container ${className}`}>
        {beams.map((beam, idx) => (
          <CollisionMechanism
            key={`beam-${idx}`}
            beamOptions={beam}
            containerRef={containerRef}
            parentRef={parentRef}
          />
        ))}
        <div ref={containerRef} className="bbc-floor" />
      </div>
      {children}
    </>
  );
};

const CollisionMechanism = ({ containerRef, parentRef, beamOptions = {} }) => {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prev) => prev + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={`bbc-beam ${beamOptions.className || ""}`}
      />

      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Explosion = (props) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className="bbc-explosion">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="bbc-flash"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="bbc-particle"
        />
      ))}
    </div>
  );
};
