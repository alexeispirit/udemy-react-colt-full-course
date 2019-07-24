import React from "react";
import useToggle from "./Hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isBroken, toggleIsBroken] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "HAPPY" : "SAD"}</h1>
      <h1 onClick={toggleIsBroken}>{isBroken ? "BROKEN" : "HEART"}</h1>
    </div>
  );
}

export default Toggler;
