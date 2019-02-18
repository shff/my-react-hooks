import useStateListener from "./useStateListener";

export default function useDOMState() {
  return useStateListener("DOMContentLoaded", () => document.readyState).state;
};
