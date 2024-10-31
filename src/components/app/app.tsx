import React, { useState } from 'react';
import s from './app.module.css';
import MyInput from '../UI/input/myInput';
import MyOutput from '../UI/output/myOutput';
import MyButton from '../UI/button/myButton';

function App() {
  const [kilos, setKilos] = useState(0);
  const [reps, setReps] = useState(0);
  const [result, setResult] = useState(0);

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

      const middleValue = Number(((brzycki + epley + lander + oConner) / 4).toFixed(2));

      setResult(middleValue);
    }
  };

  return (
    <div className={s.app}>
      <h1 className={s.title}>Calculate your 1RM</h1>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.inputsWraper}>
          <MyInput 
            name="Weight (kg)"
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
          <MyOutput 
            name="1RM"
            children={result}
          />
        </div>
        <div className={s.buttonsWraper}>
          <MyButton type="submit"> Calculate </MyButton>
          <MyButton type="reset" onClick={() => setResult(0)}> Reset </MyButton>
        </div>
      </form>
    </div>
  );
}

export default App;

// make 1st commit


