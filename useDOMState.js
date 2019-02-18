import useStateListener from "./useStateListener";

export default function useDOMState() {
  const [state] = useStateListener("DOMContentLoaded", () => document.readyState);
  return state;
};
