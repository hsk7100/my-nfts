import React, { useState } from "react";
import "./use-state.css";
const UseStatedemo = () => {
  const [myColor, setColor] = useState({
    id: 2,
    name: "red",
    age: 22,
  });
  function settingColor() {
    setColor((prev) => {
      return { ...prev, name: "blue" };
    });
  }

  return (
    <div className="use-state-demo absolute-center">
      <div>the color is {myColor.name}</div>
      <div>
        <button onClick={settingColor}>Click</button>
      </div>
    </div>
  );
};

export default UseStatedemo;
