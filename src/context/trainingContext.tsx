import React, { createContext, useState } from 'react';

interface TrainingContextProps {
  weight: number;
  setWeight: (value: number) => void;
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
  lbsOrKg: string;
  switchLbsKg: (value: 'kg' | 'lb') => void;
}

export const TrainingContext = createContext<TrainingContextProps | null>(null);

export const TrainingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [result, setResult] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lbsOrKg, switchLbsKg] = useState('kg');

  return (
    <TrainingContext.Provider value={{ weight, setWeight, reps, setReps, result, setResult, isActive, setIsActive, modalIsOpen, setModalIsOpen, isExpanded, setIsExpanded, lbsOrKg, switchLbsKg }}>
      {children}
    </TrainingContext.Provider>
  );
};