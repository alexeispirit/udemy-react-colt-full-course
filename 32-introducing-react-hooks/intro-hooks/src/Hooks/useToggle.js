import { useState } from "react";
function useToggle(initialValue = false) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState(!state);
  };

  // return piece of state a function to toggle it
  return [state, toggle];
}

export default useToggle;
