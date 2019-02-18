import useStateListener from "./useStateListener";

export default function useWindowSize() {
  return useStateListener("resize", () => innerWidth).state;
}
