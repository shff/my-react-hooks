import { useState, useEffect } from "react";

export default function useStateListener(event, callback, source = window) {
  const [state, setState] = useState(callback());
  useEffect(() => {
    const handler = e => setState(callback(e, state));
    source.addEventListener(event, handler);
    return () => {
      source.removeEventListener(event, handler);
    };
  }, [callback, event, source]);
  return [state, setState];
};
