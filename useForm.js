/* Usage:
 *
 * const [values, { radio, checkbox, tel }] = useForm({accept: "y", phone: "123"});
 *
 * return (
 *   <form>
 *     <input {...radio('accept', 'y')} />
 *     <input {...radio('accept', 'n')} />
 *     <input {...checkbox('accepta')} />
 *     <input {...tel('phone')} />
 *   </form>
 * );
 */
export default function useForm(value) {
  const [values, setValues] = useState(value);
  const [touched, setTouchedState] = useState({});
  const [validity, setValidityState] = useState({});

  const generate = type => (name, ownValue) => {
    const isCheck = type === "checkbox";
    const isRadio = type === "radio";
    return {
      name,
      type,
      get checked() {
        return isRadio ? ownValue == values[name] : values[name];
      },
      get value() {
        return isRadio ? ownValue : values[name];
      },
      onChange({ target: { value, checked } }) {
        console.log(value, checked)
        setValues({ ...values, [name]: isCheck ? checked : value });
      },
      onBlur(e) {
        setTouchedState({ ...touched, [name]: true });
        setValidityState({ ...validity, [name]: e.target.validity.valid });
      }
    };
  };
  const factory = {
    input: generate("input"),
    tel: generate("tel"),
    checkbox: generate("checkbox"),
    radio: generate("radio")
  };

  return [{ values, validity, touched }, factory];
}
