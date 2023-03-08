import Select from "react-select";
export const InputBox = ({
  appearance,
  type ,
  name,
  placeholder,
  onChange,
  className,
  readonly,
  required,
}) => {
  return (
    <input
      appearance="none"
      onChange={onChange}
      className={`form-input ${className}, `}
      type={type}
      name={name}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
    />
  );
};

export const SelectBox = ({ onChange, defaultValue, options, placeholder }) => {
  //
  console.log(options);
  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full mb-2  "
    ></Select>
  );
};

export const CheckBox = ({ onChange }) => {
  return (
    <input
      onChange={onChange}
      type="checkbox"
      className="border-primaryLight text-primaryLight focus:ring-primaryLight"
    />
  );
};

export const RoundedCheckBox = (props) => {
  return (
    <input
      type="checkbox"
      className="border-primaryLight border-2 p-2 cursor-pointer text-primaryLight focus:ring-primaryLight rounded-full"
      onChange={props.onChange}
      value={props.value}
    />
  );
};
