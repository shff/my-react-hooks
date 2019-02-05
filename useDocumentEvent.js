function useDocumentEvent(event, handler) {
  useEffect(() => {
    document.addEventListener(event, handler);
    return () => {
      document.removeEventListener(event, handler);
    };
  }, [handler]);
}
