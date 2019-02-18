import useStateListener from "./useStateListener";

export default function useStuck(ref, parent = ".wrapper") {
  return useStateListener(
    "scroll",
    () => `translate(0, ${ref.current.closest(parent).scrollTop}px)`
  ).state;
};
