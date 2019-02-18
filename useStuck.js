import { useRef, useEffect } from "react";

export default function useStuck(parent = ".wrapper") {
  const ref = useRef();
  useEffect(() => {
    const wrapper = ref.current.closest(parent);
    wrapper.addEventListener("scroll", () => {
      ref.current.style.transform = `translate(0, ${wrapper.scrollTop}px)`;
    });
    () => wrapper.removeEventListener("scroll");
  }, []);
  return ref;
};
