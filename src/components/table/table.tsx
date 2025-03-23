import { useContext } from "react";
import { TrainingContext } from "../../context/trainingContext";
import s from "./table.module.css";
import Row from "./row";

const Table = () => {
  const { result, isExpanded, setIsExpanded } = useContext(TrainingContext)!;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={s.table}>
      <Row
        result={result}
        percentage={95}
      />
      <Row
        result={result}
        percentage={90}
      />
      <Row
        result={result}
        percentage={85}
      />
      <Row
        result={result}
        percentage={80}
      />
      {isExpanded && (
        <>
          <Row
            result={result}
            percentage={75}
          />
          <Row
            result={result}
            percentage={70}
          />
          <Row
            result={result}
            percentage={65}
          />
          <Row
            result={result}
            percentage={60}
          />
          <Row
            result={result}
            percentage={55}
          />
          <Row
            result={result}
            percentage={50}
          />
        </>
      )}
      <button className={s.toggleButton} onClick={handleToggle}>
        {isExpanded ? "Show less ↑" : "Show more ↓"}
      </button>
    </div>
  );
};

export default Table;
