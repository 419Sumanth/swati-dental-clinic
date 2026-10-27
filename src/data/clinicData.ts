import { Doctor, ClinicService, Testimonial } from '../types/clinic';

export const CLINIC_INFO = {
  name: 'Swasthi Clinic',
  fullName: 'Swasthi Cardiology & Dental Clinic',
  alternateName: 'Svasti Heart & Dental Care',
  tagline: 'Comprehensive Cardiology & Precision Dental Care',
  address: '2062, 23rd Main Road, Vanganahalli, 1st Sector, HSR Layout',
  city: 'Bengaluru, Karnataka 560102',
  landmark: 'Near HSR Layout Police Station & Assetz 22 & Crest Apartments',
  phone: '+91 80 2572 4589',
  phoneAlt: '+91 94801 88320',
  email: 'care@swasthi-clinic.in',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Swasthi+Cardiology+and+Dental+Clinic+HSR+Layout+Bangalore',
  timings: {
    weekdays: 'Monday to Saturday: 9:00 AM – 9:00 PM',
    sunday: 'Sunday: 10:00 AM – 1:00 PM',
    emergencyNotice: 'Emergency cardiac referrals prioritized during working hours',
  },
  images: {
    hero: '/src/assets/images/hero_clinic_reception_1793096217653.jpg',
    cardiology: '/src/assets/images/cardiology_care_consultation_1793096217960.jpg',
    dental: '/src/assets/images/dental_clinic_operatory_1793096218322.jpg',
    doctorCardio: '/src/assets/images/doctor_cardiologist_1793096219126.jpg',
    doctorDental: '/src/assets/images/doctor_dentist_1793096219406.jpg',
  },
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sreekanth-shetty',
    name: 'Dr. Sreekanth B. Shetty',
    title: 'Senior Consultant Interventional Cardiologist',
    qualifications: 'MBBS, MD (General Medicine), DM (Cardiology)',
    department: 'cardiology',
    experienceYears: 22,
    bio: 'Renowned cardiologist with extensive experience in coronary interventions, structural heart diseases, preventive cardiology, and long-term cardiac rehabilitation. Dr. Sreekanth provides empathetic and evidence-based cardiac consultations.',
    specialties: [
      'Coronary Angioplasty & Stenting Follow-up',
      'Clinical & Preventive Cardiology',
      'Hypertension & Dyslipidemia Management',
      'Pacemaker & Arrhythmia Evaluations',
      'Resting ECG & 2D Echocardiography',
    ],
    image: CLINIC_INFO.images.doctorCardio,
    availability: 'Mon – Sat: 5:00 PM – 8:30 PM (Prior Appointment Recommended)',
  },
  {
    id: 'dr-chitra-shetty',
    name: 'Dr. Chitra S. Shetty',
    title: 'Consultant Dental Surgeon & Cosmetic Specialist',
    qualifications: 'BDS, MDS (Prosthodontics & Aesthetic Dentistry)',
    department: 'dental',
    experienceYears: 16,
    bio: 'Distinguished dental specialist passionate about gentle, anxiety-free dental care. Expert in smile makeovers, painless endodontic therapy, modern ceramic restorations, and comprehensive preventive dental hygiene.',
    specialties: [
      'Painless Single-Sitting Root Canal (RCT)',
      'Aesthetic Smile Design & Veneers',
      'Crown & Bridge Prosthodontics',
      'Ultrasonic Scaling & Periodontal Care',
      'Pediatric & Family Preventive Dentistry',
    ],
    image: CLINIC_INFO.images.doctorDental,
    availability: 'Mon – Sat: 9:30 AM – 1:30 PM & 4:30 PM – 8:30 PM',
  },
];

export const CARDIOLOGY_SERVICES: ClinicService[] = [
  {
    id: 'cardio-eval',
    title: 'Comprehensive Cardiac Consultation',
    description: 'Thorough clinical evaluation of chest discomfort, shortness of breath, palpitations, and vascular health with personalized treatment plans.',
    details: [
      'Detailed hemodynamic assessment and cardiovascular risk score calculation',
      'Review of previous angiograms, stress tests, and laboratory markers',
      'Dietary and lifestyle prescription tailored to metabolic condition',
    ],
    department: 'cardiology',
    iconName: 'Activity',
  },
  {
    id: 'ecg-echo',
    title: 'Resting 12-Lead ECG & 2D Echocardiogram',
    description: 'Advanced non-invasive cardiac diagnostics to evaluate heart electrical conduction, chamber dimensions, and ventricular ejection fraction.',
    details: [
      'High-resolution multi-lead electrocardiogram with immediate printout',
      'Color Doppler mapping to assess heart valve function and regurgitation',
      'Screening for silent ischemia and structural cardiac anomalies',
    ],
    department: 'cardiology',
    iconName: 'HeartPulse',
  },
  {
    id: 'angioplasty-followup',
    title: 'Angioplasty & Post-PCI Stent Review',
    description: 'Specialized follow-up care for patients who underwent coronary stenting, bypass surgery (CABG), or valve replacements.',
    details: [
      'Optimized dual-antiplatelet therapy and bleeding risk assessment',
      'Surveillance for restonosis symptoms and cardiac medication adjustments',
      'Structured safe cardiac physical rehabilitation planning',
    ],
    department: 'cardiology',
    iconName: 'ShieldCheck',
  },
  {
    id: 'hypertension-lipids',
    title: 'Hypertension & Lipid Disorder Clinic',
    description: 'Precision blood pressure titration and advanced lipidology to target LDL-C goals and protect against future vascular events.',
    details: [
      'Management of resistant or labile blood pressure fluctuations',
      'Atherosclerotic cardiovascular disease (ASCVD) risk reduction',
      'Non-statin and statin therapy monitoring with hepatic safety checks',
    ],
    department: 'cardiology',
    iconName: 'TrendingDown',
  },
  {
    id: 'pacemaker-arrhythmia',
    title: 'Pacemaker Checkup & Arrhythmia Triaging',
    description: 'Surveillance for irregular heartbeats, bradycardia, ventricular ectopics, and routine clinical evaluation for pacemaker recipients.',
    details: [
      'Evaluation of lightheadedness, syncope, and palpitations',
      'Device wound healing and telemetry check coordination',
      'Holter monitor prescription and ambulatory rhythm analysis',
    ],
    department: 'cardiology',
    iconName: 'Zap',
  },
  {
    id: 'preventive-cardio',
    title: 'Executive Preventive Cardiac Screening',
    description: 'Early detection protocols designed for working professionals, diabetic individuals, and those with a strong family history of heart disease.',
    details: [
      'Framingham and SCORE cardiac risk stratification',
      'Cardiometabolic screening including hs-CRP, HbA1c, and microalbuminuria',
      'Guidance on safe exercise thresholds and cardiac wellness',
    ],
    department: 'cardiology',
    iconName: 'HeartHandshake',
  },
];

export const DENTAL_SERVICES: ClinicService[] = [
  {
    id: 'dental-rct',
    title: 'Painless Single-Sitting Root Canal (RCT)',
    description: 'Modern rotary endodontics and digital apex locators for gentle, rapid tooth preservation with minimal discomfort.',
    details: [
      'Computerized rotary instruments for precision canal disinfection',
      'Biocompatible gutta-percha hermetic sealing',
      'Same-day laser disinfection option for infected pulp',
    ],
    department: 'dental',
    iconName: 'Sparkles',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Aesthetic Dentistry & Smile Designing',
    description: 'Artistic enhancement of teeth color, alignment, and contour using custom ceramic veneers and composite bonding.',
    details: [
      'Porcelain and composite veneers for chipped or discolored teeth',
      'Safe in-clinic power whitening for up to 6 shades brighter enamel',
      'Diastema (gap) closure and aesthetic contouring',
    ],
    department: 'dental',
    iconName: 'Smile',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Fixed Restorations',
    description: 'Permanent titanium tooth root replacements that restore natural chewing efficiency and jawbone vitality.',
    details: [
      'Single tooth implant replacement without altering adjacent healthy teeth',
      'Zirconia and ceramic lifelike crowns engineered for high bite forces',
      'Fixed full-arch restoration solutions for missing teeth',
    ],
    department: 'dental',
    iconName: 'Anchor',
  },
  {
    id: 'cleaning-polishing',
    title: 'Ultrasonic Scaling & Periodontal Care',
    description: 'Thorough removal of hardened tartar, plaque, and stubborn stains to prevent gingivitis and periodontal bone loss.',
    details: [
      'Gentle piezoelectric ultrasonic tips comfortable for sensitive gums',
      'Enamel stain air-polishing with mineral micro-crystals',
      'Deep subgingival curettage for bleeding or receding gums',
    ],
    department: 'dental',
    iconName: 'Droplets',
  },
  {
    id: 'aligners-braces',
    title: 'Clear Aligners & Orthodontic Care',
    description: 'Discreet, removable clear aligners and modern ceramic brackets to gently correct crowded or misaligned teeth.',
    details: [
      'Digitally planned transparent aligner sets with predictable outcome tracking',
      'Correction of overbite, underbite, crossbite, and spacing issues',
      'Comfortable lifestyle with no dietary restrictions during treatment',
    ],
    department: 'dental',
    iconName: 'Maximize2',
  },
  {
    id: 'family-dentistry',
    title: 'Family & Preventive Dental Care',
    description: 'Routine checkups, pediatric pit and fissure sealants, tooth-colored composite fillings, and senior citizen denture care.',
    details: [
      'Mercury-free aesthetic composite resin tooth restorations',
      'Fluoride therapy and decay-prevention sealants for children',
      'Flexible and acrylic complete or partial dentures for elderly patients',
    ],
    department: 'dental',
    iconName: 'Users',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    patientName: 'Venkatesh Raghavan',
    locality: 'Sector 2, HSR Layout',
    department: 'cardiology',
    treatment: 'Post-Angioplasty Follow-up & BP Management',
    rating: 5,
    comment:
      'Dr. Sreekanth Shetty is one of the most thorough and patient cardiologists I have met. He took the time to review every parameter of my ECG and blood reports, explaining the medication dosage carefully. His clinic is very clean, calm, and free of the usual hospital chaos.',
    date: 'February 2026',
  },
  {
    id: 'rev-2',
    patientName: 'Ananya Deshpande',
    locality: '1st Sector, HSR Layout',
    department: 'dental',
    treatment: 'Single-Visit Root Canal & Ceramic Crown',
    rating: 5,
    comment:
      'I was genuinely terrified of getting a root canal done. Dr. Chitra Shetty was so gentle and reassuring that I felt virtually no pain throughout the procedure. The new ceramic crown feels completely natural. Highly recommend Swasthi Clinic for dental work!',
    date: 'January 2026',
  },
  {
    id: 'rev-3',
    patientName: 'Kishore Kumar Nair',
    locality: 'Teacher’s Colony, Koramangala',
    department: 'cardiology',
    treatment: 'Preventive Cardiac Evaluation & ECG',
    rating: 5,
    comment:
      'Visited for a comprehensive cardiac checkup due to family history. The doctor explained things in simple terms without ordering unnecessary tests. Very ethical practice right here in HSR Layout.',
    date: 'March 2026',
  },
  {
    id: 'rev-4',
    patientName: 'Pooja Sundaram',
    locality: 'Sector 1, HSR Layout',
    department: 'dental',
    treatment: 'Teeth Cleaning & Aesthetic Composite Restoration',
    rating: 5,
    comment:
      'Spotless clinic! They strictly follow autoclave sterilization standards. The staff is polite, appointments run on time, and Dr. Chitra answered all my questions regarding gum health.',
    date: 'April 2026',
  },
];

export const CLINIC_FAQS = [
  {
    question: 'How do I reach Swasthi Cardiology & Dental Clinic in HSR Layout?',
    answer:
      'The clinic is situated at #2062, 23rd Main Road, Sector 1, HSR Layout, Bengaluru. It is conveniently accessible near the HSR Layout Police Station and Assetz 22 & Crest Apartments, with street parking available outside.',
  },
  {
    question: 'Do I need prior fasting for my cardiology consultation?',
    answer:
      'Routine clinical cardiology consultations and resting ECGs do not require fasting. However, if you are also scheduled for fasting blood glucose, lipid profile (cholesterol), or metabolic blood work on the same morning, a 10–12 hour overnight fast is advised.',
  },
  {
    question: 'Can I consult both the cardiologist and the dentist in a single visit?',
    answer:
      'Yes! Many patients coordinate their cardiac reviews and dental checkups on the same day. Please indicate your preference while booking an appointment so our front desk can schedule consecutive time slots.',
  },
  {
    question: 'Why is cardiovascular health important before certain dental procedures?',
    answer:
      'Patients with heart conditions (such as prosthetic valves, past stent placements, or blood thinner medications) require careful coordination before invasive dental treatments. Our clinic offers the unique advantage of dual cardiology and dental expertise under one roof to ensure maximum patient safety.',
  },
  {
    question: 'Are walk-in consultations accepted?',
    answer:
      'While walk-in patients are accommodated based on doctor availability, we strongly recommend booking your slot in advance to minimize waiting time.',
  },
];
