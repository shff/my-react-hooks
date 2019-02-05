import produce from "immer";

function useImmutable(actions, initialState) {
  const reducer = produce((state, { type, payload }) =>
    actions[type](state)(payload));
  return useReducer(reducer, initialState));
}
