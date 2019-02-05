function useDelay(interval = 1000) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    let id = setTimeout(() => { setDone(true); }, interval);
    return () => clearTimeout(id);
  }, [done]);
  return done;
};
