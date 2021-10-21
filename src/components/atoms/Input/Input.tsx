import React, { FormEventHandler, MouseEventHandler } from "react";
import "./Input.scss";

interface ButtonTypes {
  className: string;
  placeholder?: string;
  type: string;
  value?: string;
  id?: string;
  onClick?: MouseEventHandler;
  onChange?: FormEventHandler;
}

export const Input: React.FC<ButtonTypes> = ({
  className,
  placeholder,
  type,
  value,
  id,
  onClick,
  onChange,
}: ButtonTypes) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
    ></input>
  );
};
