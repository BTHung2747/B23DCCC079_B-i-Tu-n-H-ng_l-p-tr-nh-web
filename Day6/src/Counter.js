import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const congthem = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={congthem}>Click</button>
      </div>
    </>
  );
};

export default Counter;
