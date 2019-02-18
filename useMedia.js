import useStateListener from "./useStateListener";

export default function useMedia(query) {
  const media = matchMedia(query);
  const [matches] = useStateListener("resize", () => media.matches);
  return matches;
};
