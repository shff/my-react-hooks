import { useReducer } from "react";
import produce from "immer";

export default function useImmutable(actions, initialState) {
  return useReducer(
    produce((state, { type, payload }) => actions[type](state)(payload)),
    initialState
  );
};
