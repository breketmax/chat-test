import React from "react";
import { LoginForm } from "../../organisms/LoginForm";
import "./LoginPageTemplate.scss";

export const LoginPageTemplate: React.FC = () => {
  return (
    <section className="login-page">
      <div className="login-block">
        <div className="login-block-content">
          <div className="logo" />
          <h1>
            Wellcome to <span className="chatty">Chatty</span>
            <span className="excl-mark">!</span>
          </h1>
          <h2>Please, autorize yourself</h2>
          <LoginForm className="login-form" />
        </div>
      </div>
    </section>
  );
};
