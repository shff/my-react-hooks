function useFirebase(project, path = "/") {
  const [event, setEvent] = useState();
  const source = new EventSource(`https://${project}.firebaseio.com/${path}.json`);
  useEvent("put", ({data}) => setEvent(JSON.parse(data).data), source);
  return event;
};
