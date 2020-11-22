import React from "react";
import "./Counter.style.css";

export const Counter = () => {
  const [number, setNumber] = React.useState(0);
  return (
    <div className="counter__container">
      <p>Problem1: A counter including increment and decrement buttons.</p>
      <div className="counter__area">
        <button
          className="counter__btn decrement"
          onClick={() => setNumber(number > 0 ? number - 1 : 0)}
        >
          ⬇ Decrement
        </button>
        {number}
        <button
          className="counter__btn increment"
          onClick={() => setNumber(number + 1)}
        >
          ⬆ Increment
        </button>
      </div>
    </div>
  );
};
