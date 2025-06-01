import React from 'react';
import { Doctor } from '../types/Doctor';

interface DoctorCardProps {
  doctor: Doctor;
  onClick: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes de ${doctor.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={doctor.imageUrl} 
          alt={`Foto de ${doctor.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{doctor.name}</h3>
        <p className="text-sm text-gray-600">{doctor.crm}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-blue-600 text-sm font-medium">Ver perfil</span>
          <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;