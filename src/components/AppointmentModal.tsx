import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Clock, MapPin, Phone, User, Mail } from 'lucide-react';
import { CLINIC_INFO, DOCTORS } from '../data/clinicData';
import { DepartmentType } from '../types/clinic';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: DepartmentType;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDepartment = 'cardiology',
}) => {
  const [department, setDepartment] = useState<DepartmentType>(initialDepartment);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('morning');
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setDepartment(initialDepartment);
      setSubmitted(false);
      setErrorMsg('');
      // Set tomorrow's date by default
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setPreferredDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [isOpen, initialDepartment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter the patient’s full name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit Indian phone number.');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const prefix = department === 'cardiology' ? 'CARD' : 'DENT';
    setBookingRef(`SWA-${prefix}-${randomSuffix}`);
    setSubmitted(true);
    setErrorMsg('');
  };

  const selectedDoctor = DOCTORS.find((d) => d.department === department);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Swasthi Clinic · HSR Layout
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {submitted ? 'Appointment Confirmed' : 'Schedule a Consultation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/60">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-slate-900">Consultation Booked!</h4>
              <p className="text-xs text-slate-500">
                Booking Reference:{' '}
                <span className="font-mono font-bold text-slate-800">{bookingRef}</span>
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-left space-y-2.5 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-semibold text-slate-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Department:</span>
                <span className="font-semibold text-slate-900 capitalize">
                  {department === 'cardiology' ? 'Cardiology Care' : 'Dental Clinic'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Consultant:</span>
                <span className="font-semibold text-slate-900">{selectedDoctor?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-semibold text-slate-900">
                  {preferredDate} ({preferredSlot === 'morning' ? 'Morning 9:30 AM–1:00 PM' : 'Evening 4:30 PM–8:30 PM'})
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex items-start gap-1 text-[11px] text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>2062, 23rd Main Road, 1st Sector, HSR Layout, Bengaluru</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Our clinic desk will send a confirmation SMS to <strong className="text-slate-700">{phone}</strong>.
              For any immediate changes or emergency requirements, feel free to call our desk directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>Call Clinic: 080 2572 4589</span>
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Department Selection (Segmented control) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Select Department
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setDepartment('cardiology')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    department === 'cardiology'
                      ? 'bg-white text-rose-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cardiology Care
                </button>
                <button
                  type="button"
                  onClick={() => setDepartment('dental')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    department === 'dental'
                      ? 'bg-white text-teal-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dental Clinic
                </button>
              </div>
            </div>

            {/* Doctor Note */}
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-500">Consultant: </span>
                <span className="font-semibold text-slate-800">{selectedDoctor?.name}</span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                {department === 'cardiology' ? 'Cardiologist' : 'Dental Surgeon'}
              </span>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                {errorMsg}
              </div>
            )}

            {/* Patient Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Patient Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Verma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number (Mobile) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    placeholder="For appointment copy"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time Slot Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Time Window
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                  >
                    <option value="morning">Morning (9:30 AM – 1:00 PM)</option>
                    <option value="evening">Evening (4:30 PM – 8:30 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Chief Complaint / Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Reason for Visit (Brief Symptoms)
              </label>
              <textarea
                rows={2}
                placeholder={
                  department === 'cardiology'
                    ? 'e.g. Routine BP checkup, ECG review, chest discomfort, or post-stent follow-up'
                    : 'e.g. Toothache, routine dental cleaning, root canal inquiry, or smile consult'
                }
                value={chiefComplaint}
                onChange={(e) => setChiefComplaint(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Confirm Appointment Request
              </button>
              <p className="mt-2 text-[11px] text-center text-slate-400">
                No upfront payment required. Consultation fees payable at clinic desk.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
