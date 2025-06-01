import { useCallback, useEffect, useState } from 'react';

interface UseModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalId: string;
}

export const useModal = (id: string): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const modalId = `modal-${id}`;

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);

  return { isOpen, openModal, closeModal, modalId };
};