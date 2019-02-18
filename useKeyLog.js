import useStateListener from "./useStateListener";

export default function useKeyLog(handler) {
  const [keys] = useStateListener(
    "keypress",
    (e, state) => [e.key, ...state],
    document
  );
  return keys;
};
