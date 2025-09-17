import React from "react";
import { createContext } from "react";
export const CounterContext = createContext();
function CounterProvider({children}) {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <CounterContext.Provider
        value={{ count, handleIncrease, handleDecrease }}
      >
        {children}
      </CounterContext.Provider>
    </>
  );
}

export default CounterProvider;
