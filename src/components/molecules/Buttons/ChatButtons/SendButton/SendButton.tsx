import React from "react";
import { Button } from "../../../../atoms/Button";

interface SendButtonType {
  className: string;
  onClick?: React.MouseEventHandler;
}
export const SendButton: React.FC<SendButtonType> = ({
  className,
  onClick,
}) => {
  return <Button onClick={onClick} className={className} />;
};
