import { useState } from "react";
import useEvent from "./useEvent";

export default function useOnlineStatus() {
  const [status, setStatus] = useState(navigator && navigator.onLine);
  useEvent("online", () => setStatus(true));
  useEvent("offline", () => setStatus(false));
  return status;
};
