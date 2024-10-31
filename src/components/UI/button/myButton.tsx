import React from "react";
import s from "./myButton.module.css";

interface MyButtonProps {
  children?: React.ReactNode;
  type?: 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = React.forwardRef((children: MyButtonProps) => {
  return <button {...children} className={s.button} />;
});

export default MyButton;