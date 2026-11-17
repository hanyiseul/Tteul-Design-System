import { ComponentProps } from "react";
import "./Input.css"
import cn from "@/shared/utils/cn";

type InputProps = ComponentProps<"input">;

const Input = ({
  type = "text",
  className = "",
  ...props
}: InputProps) => {
  return (
    <input 
      type={type} 
      className={cn("input", className)}
      {...props}
    />
  )
}
export default Input