import React from "react";
import "./Label.scss";

interface LabelType {
  id: string;
  text: string;
}

export const Label: React.FC<LabelType> = ({ id, text }: LabelType) => {
  return <label htmlFor={id}>{text}</label>;
};
