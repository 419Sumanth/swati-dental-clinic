import React from 'react';
import { HeartHandshake, ShieldCheck, FileCheck, Stethoscope } from 'lucide-react';

export const SynergySection: React.FC = () => {
  return (
    <section className="py-14 bg-teal-900/[0.03] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            <span>Integrated Clinical Synergy</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Cardio-Dental Precision</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            The Critical Link Between Heart Health & Oral Hygiene
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Clinical cardiology and dental medicine are deeply intertwined. Having both senior
            specialties in one clinic ensures coordinated, safe medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Endocarditis & Infection Protection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Untreated periodontal infection allows oral bacteria to enter circulation, posing a
                serious risk to heart valves and vascular linings. Routine dental cleaning prevents
                systemic bacteremia.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-teal-800">
              Coordinated antibiotic prophylaxis
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Blood Thinner & Stent Safety
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patients on antiplatelet therapy (aspirin, ticagrelor) or anticoagulants require
                specialized protocol management before extractions to prevent excessive bleeding while
                safeguarding stent patency.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-rose-800">
              On-site cardiologist clearance
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Single-Visit Family Convenience
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Coordinate your parental cardiac consultation, blood pressure monitoring, and children’s
                dental checkups during a single, well-scheduled appointment in Sector 1, HSR Layout.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-sky-800">
              Seamless synchronized booking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
