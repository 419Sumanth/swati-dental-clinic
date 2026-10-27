import React, { useState } from 'react';
import {
  Activity,
  HeartPulse,
  ShieldCheck,
  TrendingDown,
  Zap,
  HeartHandshake,
  ChevronDown,
  Calendar,
  CheckCircle2,
  Clock,
  Award,
} from 'lucide-react';
import { CARDIOLOGY_SERVICES, DOCTORS, CLINIC_INFO } from '../data/clinicData';

interface CardiologySectionProps {
  onOpenBooking: (department: 'cardiology') => void;
}

export const CardiologySection: React.FC<CardiologySectionProps> = ({ onOpenBooking }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('cardio-eval');
  const cardiologist = DOCTORS.find((d) => d.id === 'dr-sreekanth-shetty')!;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-rose-600" />;
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5 text-rose-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-rose-600" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="cardiology" className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Zero-Pill clean metadata header */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-700 mb-2">
            <span>Section 01</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Cardiology Department</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Specialized Cardiovascular Medicine & Heart Care
          </h2>

          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From preventive cardiovascular checkups and resting cardiac diagnostics to routine
            post-angioplasty reviews and hypertension control, Swasthi Clinic provides comprehensive,
            evidence-grounded cardiac care in HSR Layout.
          </p>
        </div>

        {/* Doctor Feature Split */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 mb-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src={cardiologist.image}
                  alt={cardiologist.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>{cardiologist.experienceYears}+ Years Clinical Excellence</span>
              </div>
            </div>

            {/* Doctor Biography & Clinical Scope */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-rose-700">
                  Lead Cardiologist
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {cardiologist.name}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                  {cardiologist.title} · {cardiologist.qualifications}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {cardiologist.bio}
              </p>

              {/* Specialties List */}
              <div>
                <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                  Clinical Focus Areas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cardiologist.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability & Booking Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="tabular-nums">{cardiologist.availability}</span>
                </div>

                <button
                  onClick={() => onOpenBooking('cardiology')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Cardiac Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic & Clinical Services Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Cardiology Clinical & Diagnostic Services
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Click any service for clinical scope
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARDIOLOGY_SERVICES.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl border transition-all p-5 flex flex-col justify-between ${
                    isExpanded
                      ? 'border-rose-300 ring-1 ring-rose-100 shadow-sm'
                      : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Service Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-100/80">
                        {getIcon(service.iconName)}
                      </div>
                      <button
                        onClick={() =>
                          setExpandedServiceId(isExpanded ? null : service.id)
                        }
                        className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors"
                        aria-label="Toggle details"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Expandable Clinical Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          Clinical Protocols:
                        </div>
                        <ul className="space-y-1.5">
                          {service.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs text-slate-700 flex items-start gap-1.5"
                            >
                              <span className="text-rose-500 font-bold shrink-0 mt-0.5">·</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() =>
                        setExpandedServiceId(isExpanded ? null : service.id)
                      }
                      className="text-xs font-semibold text-rose-700 hover:text-rose-800 transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Hide details' : 'View clinical protocols'}
                    </button>

                    <button
                      onClick={() => onOpenBooking('cardiology')}
                      className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Schedule →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Callout Card */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100">
              <img
                src={CLINIC_INFO.images.cardiology}
                alt="Cardiology consultation at Swasthi Clinic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-700">
                Diagnostic Environment
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Calm, Unhurried Consultations & Diagnostic Clarity
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe in unhurried, patient-centered consultations. Patients receive clear
                explanations of diagnostic findings, medication regimens, and heart-healthy lifestyle
                adjustments without the rushed atmosphere typical of large tertiary hospitals.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="font-medium text-slate-700">
                  Detailed Report Discussion
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-medium text-slate-700">
                  Digital Cardiac History Tracking
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-medium text-slate-700">
                  Medication Titration Guidance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
