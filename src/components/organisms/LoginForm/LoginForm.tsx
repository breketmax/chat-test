import React, { useState } from "react";
import { PasswordField } from "../../molecules/Fields/PasswordField";
import { LoginField } from "../../molecules/Fields/LoginField";
import { Input } from "../../atoms/Input";
import "./LoginForm.scss";
import { NavLink } from "react-router-dom";

interface LoginFormTypes {
  className: string;
}
export const LoginForm: React.FC<LoginFormTypes> = ({
  className,
}: LoginFormTypes) => {
  const [buttonState, setButtonState] = useState<string>("inactive");
  const [linkState, setLinkState] = useState<string>("disable");

  const [inputLoginState, setInputLoginState] = useState<string>("");
  const [divLoginState, setDivLoginState] = useState<string>("");
  const inputLoginHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputLoginState(event.currentTarget.value);
    if (event.currentTarget.value.length !== 0) {
      if (
        !event.currentTarget.value.match(/^[a-zA-Z]+$/) ||
        event.currentTarget.value.length <= 2
      ) {
        setInputLoginState("__error");
        setDivLoginState("error");
        setButtonState("inactive");
        setLinkState("disable");
      } else {
        setInputLoginState("__typing");
        setDivLoginState("");
      }
    } else {
      setInputLoginState("");
      setDivLoginState(" ");
    }
  };

  const [inputPasswordState, setInputPasswordState] = useState<string>("");
  const [divPasswordState, setDivPasswordState] = useState<string>("");
  const inputPasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputPasswordState(event.currentTarget.value);
    if (event.currentTarget.value.length !== 0) {
      if (event.currentTarget.value.length <= 2) {
        setInputPasswordState("__error");
        setDivPasswordState("error");
        setButtonState("inactive");
        setLinkState("disable");
      } else {
        setInputPasswordState("__typing");
        setDivPasswordState(" ");
      }
    } else {
      setInputPasswordState("");
      setDivPasswordState(" ");
    }
  };
  React.useEffect(() => {
    if (inputPasswordState === "__typing" && inputLoginState === "__typing") {
      setButtonState("regular");
      setLinkState("enable");
    }
  }, [inputPasswordHandler, inputPasswordHandler]);
  return (
    <form className={className}>
      <LoginField
        inputLoginState={inputLoginState}
        validLoginState={inputLoginHandler}
        divLoginState={divLoginState}
      />
      <PasswordField
        inputPasswordState={inputPasswordState}
        validPasswordState={inputPasswordHandler}
        divPasswordState={divPasswordState}
      />
      <NavLink className={linkState} to="/chat">
        <Input
          type="submit"
          className={"login-button__" + buttonState}
          value="Log in"
        />
      </NavLink>
    </form>
  );
};
