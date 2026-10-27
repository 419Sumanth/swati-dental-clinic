import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: (department?: 'cardiology' | 'dental') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Clinic Top Bar: Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, whitespace-nowrap, no attached badges) */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-teal-700 transition-colors">
            S
          </span>
          <span>Swasthi Clinic</span>
        </a>

        {/* Zone 2: 4–5 single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#overview"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Overview
          </a>
          <a
            href="#cardiology"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Cardiology Care
          </a>
          <a
            href="#dental"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Dental Clinic
          </a>
          <a
            href="#doctors"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Specialists
          </a>
          <a
            href="#timings"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Hours & Location
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-teal-700 bg-slate-100/80 hover:bg-slate-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Call Clinic Reception"
          >
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            <span>080 2572 4589</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="text-xs text-slate-400 font-medium px-2 py-1">
            Sector 1, HSR Layout, Bengaluru
          </div>
          <div className="flex flex-col space-y-2">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
            >
              Overview
            </a>
            <a
              href="#cardiology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
            >
              Cardiology Department
            </a>
            <a
              href="#dental"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
            >
              Dental Clinic Department
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
            >
              Specialist Doctors
            </a>
            <a
              href="#timings"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
            >
              Clinic Timings & Map
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Clinic: 080 2572 4589</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
