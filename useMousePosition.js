import useStateListener from "./useStateListener";

export const useMousePosition = () => {
  return useStateListener("mousemove", e => ({
    x: e && e.clientX,
    y: e && e.clientY
  })).state;
};
