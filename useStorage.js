export default function useStorage(key, initialValue) {
  const [localValue, setLocalValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );

  const setValue = value => {
    setLocalValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEvent("storage", e => {
    if (e.key === key) {
      setLocalValue(JSON.parse(localStorage.getItem(key)));
    }
  });

  return [localValue, setValue];
};
