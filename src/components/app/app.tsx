import s from './app.module.css';
import Table from '../table/table';
import Calculator from '../calculator/calculator';

function App() {

  return (
    <>
      <h1 className={s.title}>Calculate your 1 Rep-Max</h1>
      <div className={s.app}>
        <Calculator/>
        <Table />
      </div>
    </>
  );
}

export default App;
