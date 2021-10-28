import React from "react";
import { Label } from "../../../atoms/Label";
import { Input } from "../../../atoms/Input";
interface LoginFieldType {
  divLoginState: string;
  validLoginState: React.FormEventHandler;
  inputLoginState: string;
}

export const LoginField: React.FC<LoginFieldType> = ({
  divLoginState,
  validLoginState,
  inputLoginState,
}: LoginFieldType) => {
  return (
    <div className={divLoginState}>
      <Label id="username" text="User name" />
      <Input
        type="text"
        className={"input-login" + inputLoginState}
        placeholder="Input user name"
        id="username"
        onChange={validLoginState}
      />
    </div>
  );
};
