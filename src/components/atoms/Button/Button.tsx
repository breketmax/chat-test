import React, { MouseEventHandler } from "react";

interface ButtonTypes {
  className: string;
  onClick?: MouseEventHandler;
  value?: string;
}
export const Button: React.FC<ButtonTypes> = ({
  className,
  onClick,
  value,
}: ButtonTypes) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
