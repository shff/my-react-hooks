function useClickOutside(fn) {
  const ref = useRef(null);
  useDocumentEvent("click", e => ref.current.contains(e.target) || fn());
  return ref;
}
