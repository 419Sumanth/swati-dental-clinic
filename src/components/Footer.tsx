import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Clinic Brand & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                S
              </span>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                {CLINIC_INFO.fullName}
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              Integrated Cardiology & Dental Care clinic in Sector 1, HSR Layout, Bengaluru.
              Providing specialized heart evaluations and gentle, modern dental treatments.
            </p>
            <div className="text-[11px] text-slate-400">
              Also known as Svasti Heart & Dental Care
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Departments & Care
            </div>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a href="#cardiology" className="hover:text-teal-700 transition-colors">
                  Cardiology Consultation & ECG
                </a>
              </li>
              <li>
                <a href="#cardiology" className="hover:text-teal-700 transition-colors">
                  Post-Angioplasty Stent Follow-up
                </a>
              </li>
              <li>
                <a href="#dental" className="hover:text-teal-700 transition-colors">
                  Single-Sitting Root Canal (RCT)
                </a>
              </li>
              <li>
                <a href="#dental" className="hover:text-teal-700 transition-colors">
                  Cosmetic Smile Design & Veneers
                </a>
              </li>
              <li>
                <a href="#dental" className="hover:text-teal-700 transition-colors">
                  Ultrasonic Scaling & Periodontics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Clinic Desk & Visiting
            </div>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}, {CLINIC_INFO.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="hover:text-teal-700 font-semibold text-slate-800 tabular-nums"
                >
                  {CLINIC_INFO.phone} / {CLINIC_INFO.phoneAlt}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Mon – Sat: 9:00 AM – 9:00 PM · Sun: 10:00 AM – 1:00 PM
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-800 font-semibold pt-1"
              >
                <span>Find route on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Notice */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Swasthi Cardiology and Dental Clinic. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>HSR Layout 1st Sector, Bengaluru</span>
            <span aria-hidden="true">·</span>
            <span>Private Healthcare Practice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
