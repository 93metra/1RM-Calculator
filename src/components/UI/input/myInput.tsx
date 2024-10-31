import React from "react";
import s from "./myInput.module.css";

interface MyInputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput = React.forwardRef((props: MyInputProps) => {
  return (

    <div className={s.wrapper}>
      <h3 className={s.name}>{props.name}</h3>
      <input {...props} className={s.input} />
    </div>

  );
});

export default MyInput;

