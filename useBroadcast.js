import { useRef } from "react";
import useStateListener from "./useStateListener";

export default function useBroadcast(channelName = "default") {
  const channel = useRef(new BroadcastChannel(channelName));
  const postMessage = msg => channel.current.postMessage(JSON.stringify(msg));
  const { state } = useStateListener(
    "message",
    e => JSON.parse(e.data),
    channel.current
  );
  return [state, postMessage];
}
