import type React from "react";
interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField({ type, placeholder, onChange, value }: InputFieldProps) {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default InputField;
