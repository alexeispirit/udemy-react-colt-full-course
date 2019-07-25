import React, { useState, useEffect } from "react";

function Clicker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return <button onClick={() => setCount(count + 1)}>ClickMe {count}</button>;
}

export default Clicker;