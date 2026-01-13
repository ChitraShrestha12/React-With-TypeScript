import type React from "react";

interface TextFieldProps {
  type: "text";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function TextField({ type, onChange }: TextFieldProps) {
  return (
    <input
      type={type}
      placeholder="Search by category..."
      onChange={onChange}
    />
  );
}

export default TextField;
