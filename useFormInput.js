/*
 * Usage:
 *
 *   const name = useFormInput("you");
 *   return <input {...name} />;
 */
function useFormInput(initalValue) {
  const [value, setValue] = useState(initalValue);
  const onChange = e => setValue(e.currentTarget.value);
  return { value, onChange };
}
