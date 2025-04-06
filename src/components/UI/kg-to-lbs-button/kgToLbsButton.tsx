import s from "./kgToLbsButton.module.css";
import { TrainingContext } from "../../../context/trainingContext";
import { useContext } from "react";

interface KgToLbsButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const KgToLbsButton = ({ onClick, extraClass }: KgToLbsButtonProps) => {
  const className = `${s.kg_to_lbs_Button} ${extraClass || ''}`;
  const { lbsIsActive } = useContext(TrainingContext)!;

  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
      title="Press to switch"
    >
      {lbsIsActive ? 'kg' : 'lb'}
    </button>
  );
};

export default KgToLbsButton;