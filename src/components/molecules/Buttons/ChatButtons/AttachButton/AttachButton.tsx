import React from "react";
import { Button } from "../../../../atoms/Button";

interface AttachButtonType {
  className: string;
  onClick?: React.MouseEventHandler;
}
export const AttachButton: React.FC<AttachButtonType> = ({
  className,
  onClick,
}) => {
  return <Button onClick={onClick} className={className} />;
};
