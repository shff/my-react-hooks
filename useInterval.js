import { useRef, useEffect } from "react";

export default function useInterval(cb, time = 1000) {
  const ref = useRef();
  useEffect(() => {
    ref.current = cb;
    const id = setInterval(() => ref.current(), time);
    return () => clearInterval(id);
  }, [time]);
};
