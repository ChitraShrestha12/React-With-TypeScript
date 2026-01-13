import type React from "react"

interface ButtonProps{
    btnName:string
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
}
function Button({btnName,onClick}:ButtonProps) {
  return (
    <button onClick={onClick}>{btnName}</button>
  )
}

export default Button