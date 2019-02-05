function useKeyLog(handler) {
  const [keys, setKeys] = useState([]);
  useEvent("keypress", e => setKeys([e.key, ...keys]), document);
  return keys;
}
