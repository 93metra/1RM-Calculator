import React, { useContext, useState } from "react";
import { TrainingContext } from "../../context/trainingContext";
import s from "./table.module.css";
import { percentageCalc } from "../../utils/utils";

const Table = () => {
  const { result } = useContext(TrainingContext)!;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={s.table}>
      <div className={s.row}>
        <div className={s.info}>
          <p className={s.percentage}>95 %</p>
          <p className={s.value}>{`${percentageCalc(result, 95)} kg`}</p>
        </div>
        <hr className={s.separator} />
      </div>
      <div className={s.row}>
        <div className={s.info}>
          <p className={s.percentage}>90 %</p>
          <p className={s.value}>{percentageCalc(result, 90) + " kg"}</p>
        </div>
        <hr className={s.separator} />
      </div>
      <div className={s.row}>
        <div className={s.info}>
          <p className={s.percentage}>85 %</p>
          <p className={s.value}>{percentageCalc(result, 85) + " kg"}</p>
        </div>
        <hr className={s.separator} />
      </div>
      <div className={s.row}>
        <div className={s.info}>
          <p className={s.percentage}>80 %</p>
          <p className={s.value}>{percentageCalc(result, 80) + " kg"}</p>
        </div>
        <hr className={s.separator} />
      </div>
      {isExpanded && (
        <>
          <div className={s.row}>
            <div className={s.info}>
              <p className={s.percentage}>75 %</p>
              <p className={s.value}>{percentageCalc(result, 75) + " kg"}</p>
            </div>
            <hr className={s.separator} />
          </div>
          <div className={s.row}>
            <div className={s.info}>
              <p className={s.percentage}>70 %</p>
              <p className={s.value}>{percentageCalc(result, 70) + " kg"}</p>
            </div>
            <hr className={s.separator} />
          </div>
          <div className={s.row}>
            <div className={s.info}>
              <p className={s.percentage}>65 %</p>
              <p className={s.value}>{percentageCalc(result, 65) + " kg"}</p>
            </div>
            <hr className={s.separator} />
          </div>
          <div className={s.row}>
            <div className={s.info}>
              <p className={s.percentage}>60 %</p>
              <p className={s.value}>{percentageCalc(result, 60) + " kg"}</p>
            </div>
            <hr className={s.separator} />
          </div>
          <div className={s.row}>
            <div className={s.info}>
              <p className={s.percentage}>55 %</p>
              <p className={s.value}>{percentageCalc(result, 55) + " kg"}</p>
            </div>
            <hr className={s.separator} />
          </div>
          <div className={s.row}>
            <div className={s.info}>
              <p className={s.percentage}>50 %</p>
              <p className={s.value}>{percentageCalc(result, 50) + " kg"}</p>
            </div>
            <hr className={s.separator} />
          </div>
        </>
      )}
      <button className={s.toggleButton} onClick={handleToggle}>
        {isExpanded ? "Show less ↑" : "Show more ↓"}
      </button>
    </div>
  );
};

export default Table;
