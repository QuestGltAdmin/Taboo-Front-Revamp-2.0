import React, { useRef, useState } from "react";

export const Test = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e) => {
    console.log("e", e);

    setPosition({
      left: e.clientX,
      top: e.clientY,
    });
  };

  return (
    <div
      class="scene"
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <div
        className="magic"
        style={{ position: "absolute", left: position.left, top: position.top }}
      >
        abc
      </div>
    </div>
  );
};
