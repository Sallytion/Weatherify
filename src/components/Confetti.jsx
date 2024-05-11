import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { Circle } from "lucide-react";

const Confetti = ({ isRainy }) => {
  const canvasRef = useRef(null);
  let myConfetti;

  useEffect(() => {
    const canvas = canvasRef.current;
    myConfetti = confetti.create(canvas, {
      resize: true,
    });

    if (isRainy) {
      const intervalId = setInterval(() => {
        myConfetti({
          particleCount: 10,
          spread: 150,
          origin: { y: 0.23 },
          angle: 270,
          shapes: ['circle'],
          colors: ["#0000FF", "#0000CD", "#0000B2", "#00008B", "#000080", "#191970", "#1E90FF", "#87CEFA", "#00BFFF", "#ADD8E6"],
        });
      }, 250);

      return () => {
        clearInterval(intervalId);
        myConfetti.reset();
      };
    } else {
      // Cleanup confetti when isRainy is false
      myConfetti.reset();
    }
  }, [isRainy]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default Confetti;