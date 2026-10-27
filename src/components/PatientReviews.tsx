import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';
import { DepartmentType } from '../types/clinic';

export const PatientReviews: React.FC = () => {
  const [filter, setFilter] = useState<'all' | DepartmentType>('all');

  const filteredReviews =
    filter === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.department === filter);

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
              <span>Patient Feedback</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>HSR Layout Community</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Trusted by Patients Across HSR Layout
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Real reviews from individuals and families visiting Swasthi Clinic for heart health
              and dental care.
            </p>
          </div>

          {/* Interactive Filter Control (Permitted as interactive segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('cardiology')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'cardiology'
                  ? 'bg-white text-rose-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cardiology
            </button>
            <button
              onClick={() => setFilter('dental')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'dental'
                  ? 'bg-white text-teal-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dental Care
            </button>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => {
            const isCardio = rev.department === 'cardiology';
            return (
              <div
                key={rev.id}
                className="bg-slate-50/60 rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Rating Stars & Department */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Unboxed metadata */}
                    <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                      <span
                        className={
                          isCardio
                            ? 'text-rose-700 font-semibold'
                            : 'text-teal-700 font-semibold'
                        }
                      >
                        {isCardio ? 'Cardiology' : 'Dental Care'}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="tabular-nums">{rev.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{rev.patientName}</span>
                      <span title="Verified Patient" className="inline-flex">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      </span>
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      {rev.locality}
                    </div>
                  </div>

                  <div className="text-right text-[11px] font-medium text-slate-600">
                    {rev.treatment}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
