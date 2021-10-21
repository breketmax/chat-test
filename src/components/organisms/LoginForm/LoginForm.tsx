import React, { useState } from "react";
import { LoginField, PasswordField } from "../../molecules/Fields";
import { Input } from "../../atoms/Input";
import "./LoginForm.scss";

interface LoginFormTypes {
  className: string;
}
export const LoginForm: React.FC<LoginFormTypes> = ({
  className,
}: LoginFormTypes) => {
  const [buttonState, setButtonState] = useState<string>("regular");
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonState("inactive");
  };
  return (
    <form className={className} onSubmit={submitHandler}>
      <LoginField />
      <PasswordField />
      <Input
        type="submit"
        className={"login-button__" + buttonState}
        value="Log in"
      />
    </form>
  );
};
