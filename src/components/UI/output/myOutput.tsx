import React, { useContext} from "react";
import { clsx } from "clsx";
import { TrainingContext } from "../../../context/trainingContext";
import s from "./myOutput.module.css";

interface MyOutputProps {
  name?: string;
  children?: React.ReactNode;
}

const MyOutput = React.forwardRef((props: MyOutputProps) => {
  const { isActive, lbsOrKg } = useContext(TrainingContext)!;

  return (
    <div className={s.wrapper}>
      <h3 className={s.name}>{props.name}</h3>
      <p className={clsx(s.output, isActive && s.outputActive)}>{`${props.children} ${lbsOrKg}`}</p>
    </div>
  );
});

export default MyOutput;