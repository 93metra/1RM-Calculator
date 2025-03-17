import React from "react";
import s from "./closeButton.module.css";

interface CloseButtonProps {
  onClick?: () => void;
  extraClass?: string;
}

const CloseButton = ({ onClick, extraClass }: CloseButtonProps) => {
  const className = `${s.closeButton} ${extraClass || ''}`;

  return (
    <button className={className} onClick={onClick}>
      ✕
    </button>
  );
};

export default CloseButton;