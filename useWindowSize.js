import useStateListener from "./useStateListener";

export default function useWindowSize() {
  const [size] = useStateListener("resize", () => ({
    w: innerWidth,
    h: innerHeight
  }));
  return size;
};
