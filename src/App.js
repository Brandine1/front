import React, { useState, useEffect } from "react";
import StarrySky from "./components/StarrySky";

function App() {
  const [input, setInput] = useState(0);
  useEffect(() => {}, [input]);
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <StarrySky input={input} />
    </div>
  );
}

export default App;
