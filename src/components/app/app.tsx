import s from './app.module.css';
import Table from '../table/table';
import Calculator from '../calculator/calculator';
import Modal from '../modal/modal';
import { TrainingContext } from '../../context/trainingContext';
import { useContext } from 'react';

function App() {
  const { modalIsOpen } = useContext(TrainingContext)!;

  return (
    <>
      {modalIsOpen && (
        <Modal />
      )
      }
      <h1 className={s.title}>Calculate your 1 Rep-Max</h1>
      <div className={s.app}>
        <Calculator />
        <Table />
      </div>
    </>
  );
}

export default App;
