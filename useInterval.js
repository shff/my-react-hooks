function useInterval(callback, interval = 1000) {
  const getCallback = useOnce(callback);

  useEffect(() => {
    let id = setInterval(() => getCallback()(), interval);
    return () => clearInterval(id);
  }, [interval]);
}
