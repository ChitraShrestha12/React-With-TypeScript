import type React from "react";
import Button from "./Button";
import TextField from "./TextField";

interface SearchFilterProps {
  btnName: string;
  type: "text";
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
}
function SearchFilter({ btnName, type, handleInputChange,onClick }: SearchFilterProps) {
  return (
    <div className="input-container">
      <TextField type={type} onChange={handleInputChange} />
      <Button btnName={btnName} 
      onClick={onClick}/>
    </div>
  );
}
export default SearchFilter;
