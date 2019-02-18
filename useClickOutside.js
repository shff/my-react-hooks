import { useRef } from "react";
import useEvent from "./useEvent";

export default function useClickOutside(fn) {
  const ref = useRef(null);
  useEvent("click", e => ref.current.contains(e.target) || fn(), document);
  return ref;
};
