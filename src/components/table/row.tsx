import s from "./row.module.css";
import { percentageCalc } from "../../utils/utils";

interface RowProps {
  result: number;
  percentage: number;
}

const Row = ({ result, percentage }: RowProps) => {
  return (
    <div className={s.row}>
        <div className={s.info}>
          <p className={s.percentage}>{percentage} %</p>
          <p className={s.value}>{`${percentageCalc(result, percentage)} kg`}</p>
        </div>
        <hr className={s.separator} />
      </div>
  )
};

export default Row;