import { useState } from "react";

export default function usePromise(func) {
  const [state, setState] = useState({});
  const handler = (...args) => {
    setState({ pending: true });
    func(...args)
      .then(res => setState({ res }))
      .catch(error => setData({ error }));
  };
  return [state, handler];
};
