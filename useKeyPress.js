import useEvent from "./useEvent";

export default function useKeyPress(handler) {
  useEvent("keypress", handler, document);
};
