function useScrollDetection(refs, defaultSection) {
  const [currentSection, setCurrentSection] = useState(defaultSection);
  useEvent("scroll", () => {
    setCurrentSection(
      refs
        .filter(ref => ref && ref instanceof Element)
        .find(ref => ref.getBoundingClientRect().top < 0)
    );
  });
  return currentSection;
}
