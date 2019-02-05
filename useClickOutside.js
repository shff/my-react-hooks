function useClickOutside(fn) {
  const ref = useRef(null);
  useEvent("click", e => ref.current.contains(e.target) || fn(), document);
  return ref;
}
