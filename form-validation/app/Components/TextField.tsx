"use client";
type InputType = "text" | "email" | "password";
type TextFieldProps = {
  label: string;
  id: string;
  type: InputType;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  value:string
};
function TextField({
  label,
  id,
  type,
  placeholder,
  name,
  onChange,
  error,
  value
}: TextFieldProps) {
  return (
    <div className="mb-5 relative">
      <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <input
      value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <p className="text-[14px] text-red-900 m-0 absolute">{error}</p>
    </div>
  );
}

export default TextField;
