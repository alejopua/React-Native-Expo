import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(10);

  const increaseBy = (value: number) => {
    // setCount(count + value);
    // setCount((current) => current + value );
    setCount(Math.max(count + value, 0));
  }
  
  return (
    <>
        {/* Title */}
        <h3 className="text-2xl">Counter: <small className="font-bold">{count}</small></h3>
        <div>

        {/* Button left */}
        <button className="bg-blue-600 px-4 py-1 rounded text-white hover:bg-blue-500 mr-2" onClick={() => increaseBy(-1)}>-1</button>

        {/* Button right */}
        <button className="bg-blue-600 px-4 py-1 rounded text-white hover:bg-blue-500" onClick={() => increaseBy(+1)}>+1</button>
      </div>
    </>
  )
}

