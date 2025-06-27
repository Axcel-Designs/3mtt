import React, { useState } from "react";
import { Button } from "./Button";

export function Count(getcount) {
  <div>{getcount}</div>;
}

export const Counter = () => {
  const [count, setCount] = useState(1);

  function setIncrease() {
    setCount((e) => e + 1);
  }
  function setdecrease() {
    count > 0 ? setCount((e) => e - 1) : setCount(0);
  }

  return (
    <>
      <div className=" flex flex-col p-6 justify-center align-center bg-gray-300 rounded">
        <Count />
        <div className="text-center mb-4 text-2xl font-bold">{count}</div>
        {!count && <p className="text-red-800 text-center mb-2"> You've reached the limit</p>}
        <section
          className="flex gap-4
      "
        >
          <Button label="Increase" onPress={setIncrease} />
          <Button label="Decrease" onPress={setdecrease} />
        </section>
      </div>
    </>
  );
};
