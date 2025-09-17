import { useState } from "react";
import Counter from "./context/CounterContext";
import "./App.css";
import CombinedContexts from "./context/CombinedContexts";

function App() {
  // const [count, setCount] = useState(0);
  // if (count < 0) {
  //   setCount(0);
  // }else if (count > 10) {
  //   setCount(10);
  // }
  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>count is</button>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button> */}
      <div>
      {/* <Counter/> */}
      <CombinedContexts>
        <Counter/>
      </CombinedContexts>
      </div>
    </>
  );
}

export default App;
