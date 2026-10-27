import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Clock, Calendar, CheckCircle, GraduationCap } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenBooking: (department?: 'cardiology' | 'dental') => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctors" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            <span>Clinical Leadership</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Specialist Consultants</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Meet the Senior Consultants at Swasthi Clinic
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our medical leadership brings decades of high-volume tertiary hospital experience into a
            personalized, neighborly clinic environment in HSR Layout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DOCTORS.map((doc) => {
            const isCardio = doc.department === 'cardiology';
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          isCardio ? 'text-rose-700' : 'text-teal-700'
                        }`}
                      >
                        {isCardio ? 'Cardiology Department' : 'Dental Clinic'}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1">{doc.name}</h3>
                      <div className="text-xs font-medium text-slate-600 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{doc.qualifications}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {doc.title} · {doc.experienceYears}+ years experience
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {doc.bio}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                      Specializations:
                    </div>
                    <div className="space-y-1.5">
                      {doc.specialties.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isCardio ? 'text-rose-600' : 'text-teal-600'
                            }`}
                          />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="tabular-nums">{doc.availability}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(doc.department)}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                      isCardio
                        ? 'bg-rose-600 hover:bg-rose-700'
                        : 'bg-teal-600 hover:bg-teal-700'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>
                      {isCardio
                        ? 'Book Appointment with Dr. Sreekanth'
                        : 'Book Appointment with Dr. Chitra'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
