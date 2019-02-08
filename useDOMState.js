function useDOMState() {
  const [readyState, setReadyState] = useState(document.readyState);
  useEvent("DOMContentLoaded", () => setReadyState(document.readyState));
  return readyState;
}
