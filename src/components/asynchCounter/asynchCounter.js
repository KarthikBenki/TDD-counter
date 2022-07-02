import React, { useState } from "react";

const AsynchCounter = () => {
  const [counter, setCounter] = useState(0);
  const delayCount = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);
  };
  return (
    <>
      <h1 data-testid="Counter">{counter}</h1>
      <button
        data-testid="up-button"
        onClick={() => {
          delayCount();
        }}
      >
        Increment
      </button>

      <button
        data-testid="down-button"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default AsynchCounter;
