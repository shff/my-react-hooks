function useOnlineStatus() {
  const [status, setStatus] = useState(navigator && navigator.onLine);
  useWindowEvent("online", () => setStatus(true));
  useWindowEvent("offline", () => setStatus(false));
  return status;
}
