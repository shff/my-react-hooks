function useKeyLog(handler) {
  const [keys, setKeys] = useState([]);
  useDocumentEvent("keypress", e => setKeys([e.key, ...keys]));
  return keys;
}
