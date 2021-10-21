import React, { useState } from "react";
import { Label } from "../../atoms/Label";
import { Input } from "../../atoms/Input";

export const PasswordField: React.FC = () => {
  const [inputPasswordState, setInputPasswordState] =
    useState<string>("initial");
  const inputPasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputPasswordState(event.currentTarget.value);
    if (event.currentTarget.value.length !== 0) {
      setInputPasswordState("typing");
    } else {
      setInputPasswordState("initial");
    }
  };
  return (
    <>
      <Label id="password" text="Password" />
      <Input
        type="password"
        className={"input-password__" + inputPasswordState}
        placeholder="Input password"
        id="password"
        onChange={inputPasswordHandler}
      />
    </>
  );
};
