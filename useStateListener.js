function useStateListener(event, callback, source = window) {
  const [state, setState] = useState();
  useEffect(() => {
    const handler = () => setState(callback(state));
    source.addEventListener(event, handler);
    return () => {
      source.removeEventListener(event, handler);
    };
  }, [callback, event, source]);
  return state;
}
