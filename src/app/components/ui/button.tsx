import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<{}>;

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const className = twMerge(
    "border border-gray-200 p-2 rounded text-black shadow-md",
    props.className
  );

  return (
    <button {...props} className={className}>{props.children}</button>
  )
}
