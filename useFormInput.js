import { useState } from "react";

export default function useFormInput(initalValue) {
  const [value, setValue] = useState(initalValue);
  const onChange = e => setValue(e.currentTarget.value);
  return { value, onChange };
};
