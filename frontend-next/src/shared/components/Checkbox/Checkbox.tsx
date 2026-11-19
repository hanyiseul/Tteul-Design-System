import cn from "@/shared/utils/cn";
import { ComponentProps, useId } from "react";
import "./Checkbox.css"

type CheckboxProps = ComponentProps<"input">;

type CheckboxType = {
  id?: string;
  text: string;
} & CheckboxProps;

export const Checkbox = ({className="", id, text, ...props}: CheckboxType) => {
  const randomId = useId();
  const checkboxId = id ?? randomId;
  
  return (
    <div className="checkbox">
      <input type="checkbox" className={cn("inputChk", className)} id={checkboxId}  {...props}/>
      <label htmlFor={checkboxId} className="labelChk">{text}</label>
    </div>
  )
}