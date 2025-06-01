import React from 'react';
import { Doctor } from '../types/Doctor';
import DoctorCard from './DoctorCard';

interface DoctorGridProps {
  doctors: Doctor[];
  onDoctorClick: (doctor: Doctor) => void;
}

const DoctorGrid: React.FC<DoctorGridProps> = ({ doctors, onDoctorClick }) => {
  return (
    <section id="equipe" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conheça Nossa Equipe</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa equipe de especialistas em mastologia está pronta para oferecer o melhor cuidado e tratamento personalizado para você.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onClick={() => onDoctorClick(doctor)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorGrid;