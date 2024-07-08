"use client";

import { useState } from "react";

const ShoppinCart = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    if (target.textContent === "+1") {
      setCounter((prevCount) => prevCount + 1);
    } else {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="text-7xl font-bold">{counter}</div>
      <div className="flex gap-3 w-40">
        <button
          onClick={(e) => handleClick(e)}
          className="bg-blue-900 w-full text-white font-semibold p-2 rounded-lg"
        >
          -1
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className="bg-blue-900 w-full text-white font-semibold p-2 rounded-lg"
        >
          +1
        </button>
      </div>
    </>
  );
};

export default ShoppinCart;
