import { useContext } from "react";
import { TrainingContext } from "../../context/trainingContext";
import MyButton from "../UI/button/myButton";
import MyInput from "../UI/input/myInput";
import MyOutput from "../UI/output/myOutput";
import s from "./calculator.module.css";

const Calculator = () => {
  const { kilos, setKilos, reps, setReps, result, setResult, setIsActive } = useContext(TrainingContext)!;

  const handleKilosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKilos(Number(event.target.value));
  };

  const handleRepsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReps(Number(event.target.value));
    // console.log(reps);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (kilos && reps) {
      const brzycki = kilos * (36 / (37 - reps));
      const epley = kilos * (1 + 0.0333 * reps);
      const lander = (100 * kilos) / (101.3 - 2.67123 * reps);
      const oConner = kilos * (1 + 0.025 * reps);

      const averageValue = Number(((brzycki + epley + lander + oConner) / 4).toFixed(2));

      setResult(averageValue);
      setIsActive(true);
    }
  };

  const handleReset = () => {
    setResult(0);
    setIsActive(false);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.controlsWraper}>
        <div className={s.inputsWraper}>
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