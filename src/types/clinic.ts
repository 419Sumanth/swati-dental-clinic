export type DepartmentType = 'cardiology' | 'dental';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  department: DepartmentType;
  experienceYears: number;
  bio: string;
  specialties: string[];
  image: string;
  availability: string;
}

export interface ClinicService {
  id: string;
  title: string;
  description: string;
  details: string[];
  department: DepartmentType;
  iconName: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  locality: string;
  department: DepartmentType;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AppointmentFormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  department: DepartmentType;
  doctorId: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}
