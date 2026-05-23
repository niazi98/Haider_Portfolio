// Doctor Profile Types
export interface DoctorProfile {
  fullName: string;
  fatherName: string;
  currentStatus: string;
  currentAffiliation: string;
  researchTopic: string;
  trainingHistory: TrainingHistory[];
  location: Location;
  contact: Contact;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  skills: Skill[];
}

export interface TrainingHistory {
  date: string;
  institution: string;
  supervisor?: string;
  transferNote?: string;
}

export interface Location {
  village: string;
  tehsil: string;
  district: string;
  province: string;
  country: string;
}

export interface Contact {
  phone: string;
  email: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  achievements?: string;
}

export interface Experience {
  position: string;
  institution: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Skill {
  name: string;
  category: string;
  confidence: number;
}

// MongoDB Schema Types
export interface Message {
  _id?: string;
  name: string;
  email: string;
  patientType: string;
  message: string;
  createdAt: Date;
}

export interface Publication {
  _id?: string;
  title: string;
  abstract: string;
  status: string;
  progress: number;
  parameters: string[];
  createdAt: Date;
}

export interface GalleryItem {
  _id?: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  createdAt: Date;
}
