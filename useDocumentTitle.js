function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
