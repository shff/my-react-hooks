import { useEffect } from "react";

export default function useEvent(event, handler, source = window) {
  useEffect(() => {
    source.addEventListener(event, handler);
    return () => {
      source.removeEventListener(event, handler);
    };
  }, [handler]);
};
