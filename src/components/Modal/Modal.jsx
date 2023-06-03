import { useEffect } from 'react';
import { ModalEl, Overlay } from './Modal.styled';

export function Modal({ closeModal, url }) {
  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEsc);

    return () => {
      document.removeEventListener('keydown', handleCloseByEsc);
    };
  });

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  const handleCloseByEsc = e => {
    if (e.code !== 'Escape') return;
    closeModal();
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalEl>
        <img src={url} alt="" />
      </ModalEl>
    </Overlay>
  );
}
