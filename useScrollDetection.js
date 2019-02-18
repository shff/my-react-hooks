import useStateListener from "./useStateListener";

export default function useScrollDetection(refs, defaultSection) {
  return useStateListener("scroll", () =>
    refs.find(
      ref =>
        ref && ref instanceof Element && ref.getBoundingClientRect().top < 0
    )
  ).state;
}
