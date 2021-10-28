import React from "react";
import { Input } from "../../../atoms/Input";

interface SendFieldType {
  className: string;
  onChange: React.FormEventHandler;
}

export const SendField: React.FC<SendFieldType> = ({ className, onChange }) => {
  return (
    <Input
      className={className}
      onChange={onChange}
      type="text"
      placeholder="Write something..."
    />
  );
};
