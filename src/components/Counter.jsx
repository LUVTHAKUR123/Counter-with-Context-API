import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";
import { Button } from "@mui/material";

function Counter() {
  const { count, handleIncrease, handleDecrease } = useContext(CounterContext);
  return (
    <>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Button onClick={handleIncrease}>Increase</Button>
        <p>{count}</p>
        <Button onClick={handleDecrease}>Decrease</Button>
      </div>
    </>
  );
}

export default Counter;
