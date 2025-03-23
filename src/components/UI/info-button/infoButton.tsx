import React from "react";
import s from "./infoButton.module.css";

interface InfoButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const InfoButton = ({ onClick, extraClass }: InfoButtonProps) => {
  const className = `${s.infoButton} ${extraClass || ''}`;
  
  return (
    <button className={className} onClick={onClick} type="button">
      i
    </button>
  );
};

export default InfoButton;