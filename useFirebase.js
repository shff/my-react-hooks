import useStateListener from "./useStateListener";

export default function useFirebase(project, path = "/") {
  const source = new EventSource(`https://${project}.firebaseio.com/${path}.json`);
  const [event] = useStateListener("put", ({data}) => JSON.parse(data).data, source);
  return event;
};
