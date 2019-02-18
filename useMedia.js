import useStateListener from "./useStateListener";

export default function useMedia(query) {
  return useStateListener("resize", () => matchMedia(query).matches).state;
}
