function useWindowSize() {
  const getSize = () => ({ w: window.innerWidth, h: window.innerHeight });

  const [size, setSize] = useState(getSize);
  useWindowEvent("resize", () => setSize(getSize()));
  return size;
}
