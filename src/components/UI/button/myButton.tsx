import React from "react";
import s from "./myButton.module.css";

interface MyButtonProps {
  type?: 'submit' | 'reset';
  children?: React.ReactNode;
  extraClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  ({ type, children, extraClass, onClick, ...rest }, ref) => {
    const className = `${s.button} ${extraClass || ''}`;

    return (
      <button
        type={type}
        className={className}
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default MyButton;