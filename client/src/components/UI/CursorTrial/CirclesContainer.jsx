import { useEffect, useState } from "react";
import Circle from "./Circle";

const colors = [
  "#84CC16",
  "#99D827",
  "#AEE938",
  "#C3F149",
  "#D8FD5A",
  "#EDFF6B",
  "#FFFF7C",
  "#FFFF8D",
  "#FFFF9E",
  "#FFFFAF",
  "#FFFFC0",
  "#FFFFD1",
  "#FFFFE2",
  "#FFFFF3",
  "#FFFFFF",
];

const CirclesContainer = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - 8;
      const y = e.clientY - 8;
      const updatedCircles = circles.map((circle, index) => {
        const nextCircle = circles[(index + 1) % circles.length];
        const newX = x + (nextCircle.left - x) * 0.3;
        const newY = y + (nextCircle.top - y) * 0.5;
        return { ...circle, left: newX, top: newY };
      });
      setCircles(updatedCircles);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [circles]);

  useEffect(() => {
    const initialCircles = colors.map((color, index) => ({
      color,
      left: 0,
      top: 0,
      scale: (colors.length - index) / colors.length,
    }));
    setCircles(initialCircles);
  }, []);
  return (
    <div>
      {circles.length
        ? circles.map((circle, index) => (
            <Circle
              key={index}
              color={circle.color}
              left={circle.left}
              top={circle.top}
              transition={index}
              scale={circle.scale}
            />
          ))
        : ""}
    </div>
  );
};

export default CirclesContainer;
