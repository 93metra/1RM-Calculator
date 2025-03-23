import React, { createContext, useState } from 'react';

interface TrainingContextProps {
  kilos: number;
  setKilos: (value: number) => void;
  reps: number;
  setReps: (value: number) => void;
  result: number;
  setResult: (value: number) => void;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean)=> void;
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}

export const TrainingContext = createContext<TrainingContextProps | null>(null);

export const TrainingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [kilos, setKilos] = useState(0);
  const [reps, setReps] = useState(0);
  const [result, setResult] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TrainingContext.Provider value={{ kilos, setKilos, reps, setReps, result, setResult, isActive, setIsActive, modalIsOpen, setModalIsOpen, isExpanded, setIsExpanded }}>
      {children}
    </TrainingContext.Provider>
  );
};