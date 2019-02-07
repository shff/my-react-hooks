function useMedia(query) {
  const media = window.matchMedia(query);
  let [matches, setMatches] = useState(media.matches);
  useEvent("resize", () => setMatches(media.matches));
  return matches;
}
