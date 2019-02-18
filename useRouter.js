import useStateListener from "./useStateListener";

export default function useRouter() {
  const [path, setPath] = useStateListener("popstate", () => location.pathname);
  const push = path => {
    history.pushState(null, "", path);
    setPath(path);
  };
  return [path, push];
};
