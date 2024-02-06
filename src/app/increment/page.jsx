"use client";

import { useState } from "react";

export default function IncrementPage() {
  const [count, setCount] = useState(0);

  const increaseValue = () => {
    setCount(count + 1);
  };

  function reset() {
    setCount(0);
  }

  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col gap-3">
      <h1 className="text-xl font-semibold text-red-500">
        Count Increment App
      </h1>

      <p className="text-xl font-bold text-blue-500">{count}</p>
      <button
        onClick={increaseValue}
        className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-400"
      >
        Increment
      </button>
      <button
        onClick={reset}
        className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400"
      >
        Reset
      </button>
    </div>
  );
}
