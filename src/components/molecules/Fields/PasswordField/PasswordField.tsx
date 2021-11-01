import React from "react";
import { Label } from "../../../atoms/Label";
import { Input } from "../../../atoms/Input";
import "../../../atoms/Label/Label.scss";

interface PasswordFieldType {
  divPasswordState: string;
  validPasswordState: React.FormEventHandler;
  inputPasswordState: string;
}

export const PasswordField: React.FC<PasswordFieldType> = ({
  divPasswordState,
  validPasswordState,
  inputPasswordState,
}: PasswordFieldType) => {
  return (
    <div className={divPasswordState}>
      <Label id="password" text="Password" />
      <Input
        type="password"
        className={"input-password" + inputPasswordState}
        placeholder="Input password"
        id="password"
        onChange={validPasswordState}
      />
    </div>
  );
};
