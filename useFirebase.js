import useStateListener from "./useStateListener";

export default function useFirebase(project, path = "/") {
  const url = `https://${project}.firebaseio.com/${path}.json`;
  const source = new EventSource(url);
  return useStateListener("put", ({ data }) => JSON.parse(data).data, source)
    .state;
}
