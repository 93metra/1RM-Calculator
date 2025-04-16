import React, { useContext, useState } from "react";
import clsx from "clsx";
import { TrainingContext } from "../../context/trainingContext";
import MyButton from "../UI/button/myButton";
import MyInput from "../UI/input/myInput";
import MyOutput from "../UI/output/myOutput";
import InfoButton from "../UI/info-button/infoButton";
import KgToLbsButton from "../UI/kg-to-lbs-button/kgToLbsButton";
import s from "./calculator.module.css";

const Calculator = () => {
  const { weight, setWeight, reps, setReps, result, setResult, setIsActive, setModalIsOpen, lbsOrKg, switchLbsKg } = useContext(TrainingContext)!;
  const [error, setError] = useState('');

  const handleKilosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
    setError('');
  };

  const handleRepsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReps(Number(event.target.value));
    setError('');
  };

  const validateInput = (kilos: number, reps: number) => {
    if (kilos < 0 || reps < 0) {
      setError('⚠︎ Both fields must be positive');
      return false;
    } else if (kilos === 0 || reps === 0) {
      setError('⚠︎ Both fields are required');
    } else {
      setError('');
      return true;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateInput(weight, reps)) {
      const brzycki = weight * (36 / (37 - reps));
      const epley = weight * (1 + 0.0333 * reps);
      const lander = (100 * weight) / (101.3 - 2.67123 * reps);
      const oConner = weight * (1 + 0.025 * reps);

      const averageValue = Number(((brzycki + epley + lander + oConner) / 4).toFixed(2));

      setResult(averageValue);
      setIsActive(true);
    }
  };

  const handleReset = () => {
    setWeight(0);
    setReps(0);
    setResult(0);
    setIsActive(false);
    setError('');
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const switchKgToLbs = () => {
    switchLbsKg(lbsOrKg === 'kg' ? 'lb' : 'kg');

    if (lbsOrKg === 'kg' && result) {
      setResult(Number((result * 2.20462).toFixed(1)));
    } else if (lbsOrKg === 'lb' && result) {
      setResult(Number((result / 2.20462).toFixed(1)));
    } else if (!result) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.infoButtonWrapper}>
        <InfoButton
          onClick={handleOpenModal}
          extraClass={clsx(s.infoButton, error && s.infoButtonError)} />
        <KgToLbsButton
          onClick={switchKgToLbs} />
      </div>
      <div className={s.controlsWraper}>
        <div className={s.inputsWraper}>
          {error &&
            <div className={s.errorContainer}>
              <p className={s.error}>{error}</p>
            </div>
          }
          <MyInput
            name="Weight"
            type="number"
            placeholder="0"
            onChange={handleKilosChange}
          />
          <MyInput
            name="Reps"
            type="number"
            placeholder='0'
            onChange={handleRepsChange}
          />
        </div>
        <div className={s.buttonsWraper}>
          <MyButton type="submit" extraClass={s.submitButton}> Calculate </MyButton>
          <MyButton type="reset" extraClass={s.resetButton} onClick={handleReset}> Reset </MyButton>
        </div>
      </div>
      <MyOutput
        name="1RM"
        children={result}
      />
    </form>
  )
}

export default Calculator;