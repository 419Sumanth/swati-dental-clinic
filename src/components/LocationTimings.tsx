import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_FAQS } from '../data/clinicData';

export const LocationTimings: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <section id="timings" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            <span>Clinic Access</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Location & Timings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Visit Swasthi Clinic in Sector 1, HSR Layout
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Conveniently situated in the heart of HSR Layout with easy street-level accessibility,
            spacious waiting area, and dedicated appointment scheduling.
          </p>
        </div>

        {/* Location & Timings Dual Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Location & Route Guide (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Clinic Address</h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {CLINIC_INFO.city}
                  </p>
                  <p className="text-xs font-medium text-teal-800 mt-1">
                    Landmark: {CLINIC_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Landmark & Access Details */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-teal-600" />
                  <span>How to Reach Us</span>
                </div>
                <p>
                  Located on 23rd Main Road in 1st Sector, HSR Layout, directly accessible from 27th Main
                  and the Outer Ring Road. Street parking is available along 23rd Main.
                </p>
              </div>

              {/* Contact Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="p-3 rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition-colors flex items-center gap-2.5 text-xs"
                >
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-semibold">
                      Landline Desk
                    </div>
                    <div className="font-bold text-slate-800 tabular-nums">
                      {CLINIC_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneAlt}`}
                  className="p-3 rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition-colors flex items-center gap-2.5 text-xs"
                >
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-semibold">
                      Mobile & WhatsApp
                    </div>
                    <div className="font-bold text-slate-800 tabular-nums">
                      {CLINIC_INFO.phoneAlt}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Verified Google Maps listing for Svasti Heart & Dental Care
              </span>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Operational Hours (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Consultation Hours</h3>
                  <p className="text-xs text-slate-500">Regular clinic operating schedule</p>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-900">
                    <span>Monday to Saturday</span>
                    <span className="text-teal-700 font-bold tabular-nums">9:00 AM – 9:00 PM</span>
                  </div>
                  <div className="mt-1.5 text-[11px] text-slate-500 space-y-0.5">
                    <div>· Dental Consults: 9:30 AM – 1:30 PM & 4:30 PM – 8:30 PM</div>
                    <div>· Cardiology Clinic: 5:00 PM – 8:30 PM (Prior Slot Recommended)</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-900">
                    <span>Sunday</span>
                    <span className="text-teal-700 font-bold tabular-nums">10:00 AM – 1:00 PM</span>
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    Morning appointments & scheduled dressing / reviews only
                  </div>
                </div>
              </div>

              {/* Emergency Note */}
              <div className="mt-4 p-3 rounded-lg bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900">
                <span className="font-semibold">Patient Note: </span>
                To avoid waiting periods during evening peak hours, please book your appointment in
                advance or call the reception desk before visiting.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Appointment Desk Status</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                Open for Bookings
              </span>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Patient Guidance & Clinic FAQs
            </h3>
          </div>

          <div className="space-y-3">
            {CLINIC_FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
