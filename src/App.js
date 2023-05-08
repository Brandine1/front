import React, { useState, useEffect, useRef } from "react";
import StarrySky from "./components/StarrySky";

function App() {
  const [input, setInput] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  }, [input]);
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <h3>{count.current}</h3>
      <StarrySky input={input} />
    </div>
  );
}

export default App;
