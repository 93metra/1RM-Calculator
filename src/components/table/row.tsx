import { useContext } from "react";
import { percentageCalc } from "../../utils/utils";
import { TrainingContext } from "../../context/trainingContext";
import clsx from "clsx";
import s from "./row.module.css";

interface RowProps {
  result: number;
  percentage: number;
}

const Row = ({ result, percentage }: RowProps) => {
  const { isActive, lbsOrKg } = useContext(TrainingContext)!;
  
  return (
    <div className={s.row}>
        <div className={s.info}>
          <p className={clsx(s.percentage, isActive && s.percentageActive)}>{percentage} %</p>
          <p className={clsx(s.value, isActive && s.valueActive)}>{`${percentageCalc(result, percentage)} ${lbsOrKg}`}</p>
        </div>
        <hr className={s.separator} />
      </div>
  )
};

export default Row;