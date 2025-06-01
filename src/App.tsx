import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DoctorGrid from './components/DoctorGrid';
import Modal from './components/Modal';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';
import { doctors } from './data/doctors';
import { Doctor } from './types/Doctor';
import { useModal } from './hooks/useModal';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const { isOpen, openModal, closeModal, modalId } = useModal('doctor-details');

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    openModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <DoctorGrid doctors={doctors} onDoctorClick={handleDoctorClick} />
        <AppointmentSection />
      </main>

      <Footer />
      
      {selectedDoctor && (
        <Modal 
          isOpen={isOpen} 
          onClose={closeModal} 
          doctor={selectedDoctor}
          modalId={modalId}
        />
      )}
    </div>
  );
}

export default App;