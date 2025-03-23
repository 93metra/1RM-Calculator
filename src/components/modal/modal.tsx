import s from './modal.module.css'
import { TrainingContext } from '../../context/trainingContext';
import { useContext, useEffect } from 'react';
import CloseButton from '../UI/button/close-button/closeButton'

const Modal = () => {
  const { setModalIsOpen } = useContext(TrainingContext)!;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [setModalIsOpen]);

  return (
    <div className={s.overlay} onClick={() => setModalIsOpen(false)}>
      <div className={s.main} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setModalIsOpen(false)} extraClass={s.closeButton} />
        <h2 className={s.title}>What is 1 Rep Max (1RM)?</h2>
      </div>
    </div>
  )
}

export default Modal;

