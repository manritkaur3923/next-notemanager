"use client";
import Button from "@/components/Button";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="m-3 w-70">
      <div className="text-2xl text-center pb-5 font-semibold">{count}</div>
      <div className=" flex justify-between">
        <Button text="Increase by 1" onClick={() => setCount(count + 1)} />
        <Button text="Decrease by 1" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}
