import React, { useState, useEffect } from "react";
import "./use-effect.css";
const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  // //   useEffect(() => {
  //     setCount(count + 1);
  //   });
  useEffect(() => {
    if (count >= 1) {
      document.title = `Count is : (${count})`;
    } else {
      document.title = `Count is:`;
    }
  });
  function addCount() {
    setCount((prev) => {
      return (prev += 1);
    });
  }
  return (
    <div className="use-effect-demo">
      <div>Learning use effect</div>
      <div>Current count is : {count}</div>
      <div>
        <button onClick={addCount}>Click to increase the count</button>
      </div>
    </div>
  );
};

export default UseEffectDemo;
