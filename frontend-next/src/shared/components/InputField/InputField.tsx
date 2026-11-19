import { useId } from "react";
import Input from "../Input/Input"
import "./InputField.css"
import cn from "@/shared/utils/cn";

type InputFieldType = {
  id?: string;
  label: string;
  type?: string;
  className?: string;
  placeholder?: string;
  infoMsg?: string;
  errorMsg?: string;
  icon?: string;
}

const InputField = ({ id, label, type, className, placeholder, infoMsg, errorMsg, icon }: InputFieldType) => {
  const autoId = useId();
  const inputId = id ?? autoId;

  const input = <Input type={type} placeholder={placeholder} className={className} id={inputId} />;

  return (
    <div className={cn("inputField", errorMsg && "inputField_error")}>
      <label htmlFor={inputId}>{label}</label>
      {icon ? <div className={cn("inputWrap", icon && `inputIcon icon-${icon}`)}>{input}</div> : input}
      {infoMsg && <span className="inputFieldMsg infoMsg">{infoMsg}</span>}
      {errorMsg && <span className="inputFieldMsg errorMsg">{errorMsg}</span>}
    </div>
  )
}
export default InputField