import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CardiologySection } from './components/CardiologySection';
import { DentalSection } from './components/DentalSection';
import { SynergySection } from './components/SynergySection';
import { DoctorsSection } from './components/DoctorsSection';
import { PatientReviews } from './components/PatientReviews';
import { LocationTimings } from './components/LocationTimings';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { DepartmentType } from './types/clinic';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDepartment, setBookingDepartment] = useState<DepartmentType>('cardiology');

  const handleOpenBooking = (department: DepartmentType = 'cardiology') => {
    setBookingDepartment(department);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFD] text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-teal-100 selection:text-teal-900">
      {/* Top Bar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 1: Cardiology Department */}
        <CardiologySection onOpenBooking={handleOpenBooking} />

        {/* Section 2: Dental Clinic Department */}
        <DentalSection onOpenBooking={handleOpenBooking} />

        {/* Clinical Synergy: Cardio-Dental Connection */}
        <SynergySection />

        {/* Doctors Section */}
        <DoctorsSection onOpenBooking={handleOpenBooking} />

        {/* Patient Reviews & Community Feedback */}
        <PatientReviews />

        {/* Location, Hours, Google Maps & FAQs */}
        <LocationTimings />
      </main>

      {/* Clean Quiet Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialDepartment={bookingDepartment}
      />
    </div>
  );
}
