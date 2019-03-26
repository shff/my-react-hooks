/* 
 * Vue.js/Immmer objects with automatic change detection
 *
 * Notice: unlike Vue and Immer, the change detection is not recursive!
 *
 * Usage:
 *
 *   const data = useData({ count: 0 });
 *
 *   return <button onClick={() => data.count++ }>{ data.count }</button>;
 *
 */

export default function useData(data) {
  const [state, setState] = useState(data);
  return new Proxy(state, {
    set: (obj, prop, value) => setState({ ...state, [prop]: value})
  });
}
