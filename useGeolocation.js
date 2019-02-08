function useGeolocation() {
  const [location, setLocation] = useState({});
  const handler = ({coords}) => setLocation(coords);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handler);
    const id = navigator.geolocation.watchPosition(handler);
    return () => navigator.geolocation.clearWatch(id);
  }, []);
  return location;
}
