import React, { useState } from 'react';
import {
  Sparkles,
  Smile,
  Anchor,
  Droplets,
  Maximize2,
  Users,
  ChevronDown,
  Calendar,
  CheckCircle2,
  Clock,
  Award,
  ShieldAlert,
} from 'lucide-react';
import { DENTAL_SERVICES, DOCTORS, CLINIC_INFO } from '../data/clinicData';

interface DentalSectionProps {
  onOpenBooking: (department: 'dental') => void;
}

export const DentalSection: React.FC<DentalSectionProps> = ({ onOpenBooking }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('dental-rct');
  const dentist = DOCTORS.find((d) => d.id === 'dr-chitra-shetty')!;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-teal-600" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-teal-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-teal-600" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-teal-600" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="dental" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Zero-Pill clean metadata header */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            <span>Section 02</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Dental Clinic Department</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Gentle, Advanced Family & Cosmetic Dentistry
          </h2>

          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            State-of-the-art dental care designed for gentle patient comfort, sterile precision, and
            lasting oral health. From routine ultrasonic cleaning to single-visit root canals and
            cosmetic smile enhancements in Sector 1, HSR Layout.
          </p>
        </div>

        {/* Doctor Feature Split */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 mb-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{dentist.experienceYears}+ Years Patient-Centered Dentistry</span>
              </div>
            </div>

            {/* Doctor Biography & Clinical Scope */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  Lead Dental Specialist
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {dentist.name}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                  {dentist.title} · {dentist.qualifications}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {dentist.bio}
              </p>

              {/* Specialties List */}
              <div>
                <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                  Key Dental Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dentist.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability & Booking Action */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="tabular-nums">{dentist.availability}</span>
                </div>

                <button
                  onClick={() => onOpenBooking('dental')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Dental Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dental Services Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Dental Treatments & Procedures
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Click any treatment for procedure details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DENTAL_SERVICES.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl border transition-all p-5 flex flex-col justify-between ${
                    isExpanded
                      ? 'border-teal-300 ring-1 ring-teal-100 shadow-sm'
                      : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Service Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-100/80">
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
                          Treatment Highlights:
                        </div>
                        <ul className="space-y-1.5">
                          {service.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs text-slate-700 flex items-start gap-1.5"
                            >
                              <span className="text-teal-600 font-bold shrink-0 mt-0.5">·</span>
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
                      className="text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Hide details' : 'View treatment steps'}
                    </button>

                    <button
                      onClick={() => onOpenBooking('dental')}
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

        {/* Visual Callout Card: Operatory & Hygiene Standards */}
        <div className="mt-12 bg-slate-50/70 rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100">
              <img
                src={CLINIC_INFO.images.dental}
                alt="Modern dental operatory and equipment at Swasthi Clinic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Pristine Operatory Standards
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Hospital-Grade Sterilization & Zero-Anxiety Comfort
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Patient safety is non-negotiable. Every instrument undergoes multi-stage ultrasonic
                disinfection and Class-B vacuum autoclave cycle. With ergonomic treatment chairs,
                gentle topical anesthetics, and friendly chairside explanation, we ensure a painless,
                reassuring dental visit for all ages.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="font-medium text-slate-700">
                  Class-B Autoclave Certified
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-medium text-slate-700">
                  100% Single-Use Disposables
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-medium text-slate-700">
                  Low-Radiation Digital X-Rays
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
