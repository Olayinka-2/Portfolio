import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 125,
        left: position.x - 125,
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "rgba(148, 163, 184, 0.3)",
        filter: "blur(130px)",
        pointerEvents: "none",
        transform: "translate3d(0,0,0)",
        transition: "top 0.05s ease, left 0.05s ease",
        zIndex: 9999,
      }}
    />
  );
}

export default Cursor;
