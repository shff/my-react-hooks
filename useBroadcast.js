function useBroadcast(channelName = "default") {
  const [message, setMessage] = useState();
  const channel = useRef(new BroadcastChannel(channelName));
  useEvent("message", e => setMessage(JSON.parse(e.data)), channel.current);
  return [message, msg => channel.current.postMessage(JSON.stringify(msg))];
}
