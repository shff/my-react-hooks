function useFetch(url) {
  const [data, setData] = useState({ loading: true });
  useEffect(() => {
    fetch(url)
      .then(response => response.json().then(data => setData({ response, data })))
      .catch(error => setData({ error }));
  }, [url]);
  return data;
}
