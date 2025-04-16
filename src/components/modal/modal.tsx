import s from './modal.module.css'
import { TrainingContext } from '../../context/trainingContext';
import { useContext, useEffect } from 'react';
import CloseButton from '../UI/button/close-button/closeButton'
import InfoBlock from '../info-block/infoBlock';

const Modal = () => {
  const { setModalIsOpen } = useContext(TrainingContext)!;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalIsOpen(false);
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [setModalIsOpen]);

  return (
    <div className={s.overlay} onClick={() => setModalIsOpen(false)}>
      <div className={s.main} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setModalIsOpen(false)} extraClass={s.closeButton} />
        <InfoBlock />
      </div>
    </div>
  )
}

export default Modal;

