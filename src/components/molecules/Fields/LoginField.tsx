import React, { useState } from "react";
import { Label } from "../../atoms/Label";
import { Input } from "../../atoms/Input";

export const LoginField: React.FC = () => {
  const [inputLoginState, setInputLoginState] = useState<string>("");
  const [divLoginState, setDivLoginState] = useState<string>("");
  const inputLoginHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputLoginState(event.currentTarget.value);
    if (event.currentTarget.value.length !== 0) {
      if (!event.currentTarget.value.match(/^[a-zA-Z]+$/)) {
        setInputLoginState("__error");
        setDivLoginState("error");
      } else {
        setInputLoginState("__typing");
      }
    } else {
      setInputLoginState("");
      setDivLoginState("");
    }
  };
  return (
    <div className={divLoginState}>
      <Label id="username" text="User name" />
      <Input
        type="text"
        className={"input-login" + inputLoginState}
        placeholder="Input user name"
        id="username"
        onChange={inputLoginHandler}
      />
    </div>
  );
};
