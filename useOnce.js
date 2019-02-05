function useOnce(data) {
  const ref = useRef();
  useEffect(() => {
    ref.current = data;
  });
  return () => ref.current;
}
