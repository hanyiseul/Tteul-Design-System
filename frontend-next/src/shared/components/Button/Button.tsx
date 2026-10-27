import type { ButtonHTMLAttributes } from "react";
import "./Button.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  icon?: string;
  text: string;
  variant?: string;
  size?: "sm" | "md" | "lg"
};

const Button = ({
  type = "button",
  className = "",
  icon,
  variant= "primary",
  size= "md",
  isLoading = false,
  disabled = false,
  text,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`button btn-${variant} btn-${size} ${icon ? `icon-${icon}` : ""} ${className} `}
      disabled={disabled || isLoading}
    >
      {icon && (
        <span className={`btnIcon btnIcon-${icon}`} aria-hidden="true" />
      )}
      <span className={`${icon ? "blind" : "buttonText"}`}>{text}</span>
    </button>
  );
};

export default Button;