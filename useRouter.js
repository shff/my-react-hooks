import useStateListener from "./useStateListener";

export default function useRouter() {
  const { state, setter } = useStateListener("popstate", () => location.pathname);
  const push = path => {
    history.pushState(null, "", path);
    setter(path);
  };
  return [state, push];
};
