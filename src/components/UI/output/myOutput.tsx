import React from "react";
import s from "./myOutput.module.css";

interface MyOutputProps {
  name?: string;
  children?: React.ReactNode;
}

const MyOutput = React.forwardRef((props: MyOutputProps) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.name}>{props.name}</h3>
      <p className={s.output}>{`${props.children} kg`}</p>
    </div>
  );
});

export default MyOutput;