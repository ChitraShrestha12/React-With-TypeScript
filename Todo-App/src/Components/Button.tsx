interface ButtonProps {
  label: string;
  btnType: "submit" | "button" | "reset";
}
function Button({ label, btnType }: ButtonProps) {
  return <button type={btnType}>{label}</button>;
}

export default Button;
