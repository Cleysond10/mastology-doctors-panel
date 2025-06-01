import React, { useEffect, useRef } from 'react';
import { X, Linkedin, Instagram, Globe } from 'lucide-react';
import { Doctor } from '../types/Doctor';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
  modalId: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, doctor, modalId }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá, gostaria de marcar uma consulta com ${doctor.name}`);
    window.open(`https://wa.me/5581986558892?text=${message}`, '_blank');
  };

  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    closeButtonRef.current?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${modalId}-title`}
      ref={modalRef}
    >
      <div
        className="relative w-full max-w-3xl mx-auto p-4"
        ref={contentRef}
      >
        <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
          <button
            ref={closeButtonRef}
            className="absolute top-4 right-4 z-10 rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 transition-colors"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-100">
                <img
                  src={doctor.imageUrl}
                  alt={`Foto de ${doctor.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3 p-6 md:p-8">
              <h2
                id={`${modalId}-title`}
                className="text-2xl font-bold text-gray-800 mb-1"
              >
                {doctor.name}
              </h2>
              <p className="text-blue-600 font-medium mb-4">{doctor.crm}</p>

              <div className="prose max-w-none mb-6">
                <p className="text-gray-700">{doctor.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Redes Sociais</h3>
                <div className="flex gap-3">
                  {doctor.socialMedia.linkedin && (
                    <a
                      href={doctor.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label={`LinkedIn de ${doctor.name}`}
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}

                  {doctor.socialMedia.instagram && (
                    <a
                      href={doctor.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                      aria-label={`Instagram de ${doctor.name}`}
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  )}

                  {doctor.socialMedia.website && (
                    <a
                      href={doctor.socialMedia.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      aria-label={`Website de ${doctor.name}`}
                    >
                      <Globe className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
                >
                  Agendar consulta via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
