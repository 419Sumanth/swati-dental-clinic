import React from 'react';
import { Heart, Sparkles, MapPin, Clock, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: (department?: 'cardiology' | 'dental') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="overview" className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed clean metadata kicker (Zero-Pill discipline) */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800 mb-3">
          <span>HSR Layout Sector 1</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Bengaluru</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Cardiology & Dental Care</span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Dedicated Cardiology & Modern Dental Care in HSR Layout.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Under the clinical leadership of senior interventional cardiologist{' '}
              <strong className="text-slate-800 font-semibold">Dr. Sreekanth B. Shetty</strong>{' '}
              and experienced dental specialist{' '}
              <strong className="text-slate-800 font-semibold">Dr. Chitra S. Shetty</strong>,
              Swasthi Clinic provides comprehensive cardiovascular diagnostics and gentle,
              advanced dentistry under one roof in Sector 1, HSR Layout.
            </p>

            {/* Department Shortcuts & Main CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
              >
                Book Consultation
              </button>

              <a
                href="#cardiology"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 hover:text-teal-700 bg-white border border-slate-200/90 hover:border-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Cardiology Department</span>
              </a>

              <a
                href="#dental"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 hover:text-teal-700 bg-white border border-slate-200/90 hover:border-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>Dental Clinic</span>
              </a>
            </div>

            {/* Key Assurance Indicators (Quiet inline metadata) */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                Hospital-Grade Autoclave Sterilization
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
              <span className="font-medium text-slate-700">Digital 12-Lead ECG & 2D Echo</span>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
              <span className="font-medium text-slate-700">Painless Rotary Endodontics</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Clinic Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full relative bg-slate-100">
                <img
                  src={CLINIC_INFO.images.hero}
                  alt="Swasthi Cardiology and Dental Clinic modern reception and consultation lounge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container if needed
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Clinic Snapshot Caption */}
              <div className="p-4 bg-white/95 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-900">
                    Swasthi Cardiology & Dental Clinic
                  </div>
                  <div className="text-[11px] text-slate-500">
                    23rd Main Road, Sector 1, HSR Layout
                  </div>
                </div>

                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors whitespace-nowrap"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Structured Clinic Information Strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-white border border-slate-200/90 rounded-xl shadow-xs">
          {/* Card 1: Address */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Clinic Location</div>
              <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                2062, 23rd Main, 1st Sector, HSR Layout
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Near Police Station</div>
            </div>
          </div>

          {/* Card 2: Hours */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-lg bg-sky-50 text-sky-700 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Working Hours</div>
              <div className="text-xs text-slate-600 mt-0.5 tabular-nums">
                Mon – Sat: 9:00 AM – 9:00 PM
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 tabular-nums">
                Sun: 10:00 AM – 1:00 PM
              </div>
            </div>
          </div>

          {/* Card 3: Dual Specialty */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-lg bg-rose-50 text-rose-700 shrink-0">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Two Core Specialties</div>
              <div className="text-xs text-slate-600 mt-0.5">
                Interventional Cardiology
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Advanced Family Dentistry
              </div>
            </div>
          </div>

          {/* Card 4: Contact Desk */}
          <div className="flex items-start gap-3 p-2">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Reception Desk</div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="text-xs font-semibold text-slate-800 hover:text-teal-700 mt-0.5 block tabular-nums"
              >
                080 2572 4589
              </a>
              <div className="text-[11px] text-slate-400 mt-0.5 tabular-nums">
                +91 94801 88320
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
