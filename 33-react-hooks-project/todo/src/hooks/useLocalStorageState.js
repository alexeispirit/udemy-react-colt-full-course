import { useState, useEffect } from "react";

export default function useLocalStorageState(key, defaultValue) {
  //  make piece of state, based on value in localStorage or default
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (err) {
      value = defaultValue;
    }
    return value;
  });

  //  use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
