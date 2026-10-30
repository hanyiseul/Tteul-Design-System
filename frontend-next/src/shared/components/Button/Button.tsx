import { useRef, useState, type ButtonHTMLAttributes, type MouseEvent } from "react";
import "./Button.css"
import Image from "next/image";

type ButtonProps = Omit<  ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  onClick?: (
    event: MouseEvent<HTMLButtonElement>
  ) => void | Promise<unknown>;
  icon?: string;
  img?: string;
  text: string;
  variant?: string;
  size?: "sm" | "md" | "lg"
};

const Button = ({
  type = "button",
  className = "",
  icon,
  img,
  variant= "primary",
  size= "md",
  onClick,
  disabled = false,
  text,
  ...props
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const pendingRef = useRef(false);

  const finishLoading = () => {
    pendingRef.current = false;
    setIsLoading(false);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || pendingRef.current) return;

    const result = onClick?.(event);

    if (!result || typeof result.then !== "function") return;

    pendingRef.current = true;
    setIsLoading(true);

    Promise.resolve(result).then(
      () => finishLoading(),
      () => finishLoading()
    );
  }
  
  return (
    <button
      {...props}
      type={type}
      className={`button btn-${variant} btn-${size} ${icon ? `btnIcon` : ""} ${className} `}
      disabled={disabled || isLoading}
      onClick={handleClick}
      aria-busy={isLoading}
    >
      <span className={isLoading ? "buttonContent loading" : "buttonContent"}>
        {img && (
          <Image
            src={`/icons/${img}`}
            width={16}
            height={16}
            alt=""
            className="btnImg"
          />
        )}

        {icon && (
          <Image
            src={`/icons/icon_${icon}.svg`}
            width={16}
            height={16}
            alt=""
            className="btnImg"
          />
        )}

        <span className={icon ? "blind" : "buttonText"}>{text}</span>
      </span>
      {isLoading && (
        <span className="btnSpinner" aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;