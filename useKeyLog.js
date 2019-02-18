import useStateListener from "./useStateListener";

export default function useKeyLog(handler) {
  return useStateListener("keypress", (e, state) => [e.key, ...state], document)
    .state;
}
