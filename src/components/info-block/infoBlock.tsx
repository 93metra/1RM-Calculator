import s from './infoBlock.module.css'
import MyButton from '../UI/button/myButton';
import { useState } from 'react';
import clsx from 'clsx';

const InfoBlock = () => {
  const [whatIsItIsActive, setWhatIsItIsActive] = useState(true);
  const [howToUseIsActive, setHowToUseIsActive] = useState(false);

  const openWhatIsIt = () => {
    if (howToUseIsActive) {
      setHowToUseIsActive(false);
      setWhatIsItIsActive(true);
    } else {
      return;
    };
  };

  const openHowToUse = () => {
    if (whatIsItIsActive) {
      setWhatIsItIsActive(false);
      setHowToUseIsActive(true);
    } else {
      return;
    };
  };

  return (
    <div className={s.infoBlock}>
      <div className={s.buttonsWrapper}>
        <MyButton
          extraClass={clsx(s.infoButton, { [s.buttonActive]: whatIsItIsActive })}
          onClick={openWhatIsIt}
        >
          What is it?
        </MyButton>
        <MyButton
          extraClass={clsx(s.infoButton, { [s.buttonActive]: howToUseIsActive })}
          onClick={openHowToUse}
        >
          How to use?
        </MyButton>
      </div>
      <div className={s.textContainer}>
        {whatIsItIsActive && (
          <>
            <ul className={s.list}>
              <li className={s.listItem}>
                The <span className={s.bold}>1 Repetition Maximum (1RM)</span> is the maximum weight you can lift for a single repetition of a given exercise with proper form.<br />
                It is a widely used metric in strength training and fitness programs to assess an individual's strength level and plan effective workouts.
              </li>
              <li className={s.listItem}>
                The 1RM-Calculator determines your estimated 1RM by calculating the average value from four well-known formulas:
                <ul className={s.subList}>
                  <li className={s.subListItem}>
                    Brzycki Formula: <span className={s.bold}>1RM = Weight * (36 / (37 - Repetitions))</span>
                  </li>
                  <li className={s.subListItem}>
                    Epley Formula: <span className={s.bold}>1RM = Weight * (1 + 0.0333 * Repetitions)</span>
                  </li>
                  <li className={s.subListItem}>
                    Lander Formula: <span className={s.bold}>1RM = (100 * Weight) / (101.3 - 2.67123 * Repetitions)</span>
                  </li>
                  <li className={s.subListItem}>
                    O’Conner Formula: <span className={s.bold}>1RM = Weight * (1 + 0.025 * Repetitions)</span>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        )}
        {howToUseIsActive && (
          <>
            <ul className={s.list}>
              <li className={s.listItem}>
                <span className={s.bold}>Choose your unit:</span> select between kilograms <span className={s.bold}>(kg)</span> or pounds <span className={s.bold}>(lbs)</span> by clicking the corresponding button.
              </li>
              <li className={s.listItem}>
                <span className={s.bold}>Enter your data:</span> Input the weight you lifted and the number of repetitions you completed into the designated fields.
              </li>
              <li className={s.listItem}>
                <span className={s.bold}>Calculate:</span> Press the <span className={s.bold}>"Calculate"</span> button to instantly get your estimated 1RM.
                <p className={s.note}>
                  - <span className={s.bold}>Switch units anytime:</span> If needed, you can switch between kg and lbs even after performing the calculation, and the app will automatically convert the result for you.
                </p>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoBlock;