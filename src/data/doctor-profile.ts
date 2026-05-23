import { DoctorProfile } from '@/types';

export const doctorProfile: DoctorProfile = {
  fullName: "Ghulam Haider Niazi",
  fatherName: "Sarwar Jan Niazi",
  currentStatus: "Dr. - 3rd Year FCPS-II Postgraduate Resident (PGR) in General/Internal Medicine",
  currentAffiliation: "Medical-A Unit, MTI DHQ Teaching Hospital / Gomal Medical College, Dera Ismail Khan, KP, Pakistan",
  researchTopic: "Frequency of seizures in patients of acute ischemic stroke",
  trainingHistory: [
    {
      date: "11-01-2024",
      institution: "Saidu Sharif Medical College / Saidu Group of Teaching Hospitals, Swat",
      transferNote: "Later executed an official institutional & supervisor re-registration transfer to Gomal Medical College / DHQ Teaching Hospital D.I. Khan under supervisor Assistant Professor Dr. Imran Ullah"
    },
    {
      date: "2026",
      institution: "Gomal Medical College / DHQ Teaching Hospital D.I. Khan",
      supervisor: "Assistant Professor Dr. Imran Ullah"
    }
  ],
  location: {
    village: "Begum Boring (Niazi Abad)",
    tehsil: "Paharpur",
    district: "Dera Ismail Khan",
    province: "Khyber Pakhtunkhwa",
    country: "Pakistan"
  },
  contact: {
    phone: "03477922753",
    email: ["ghulamhaiderniazi.792@gmail.com", "Ghulamhaiderniazi792@gmail.com"]
  },
  education: [
    {
      degree: "MBBS",
      institution: "Gomal Medical College, D.I. Khan",
      period: "2016–2022",
      achievements: "Graduated with 1st Division in all Professional MBBS Examinations"
    },
    {
      degree: "F.Sc (Pre-Medical)",
      institution: "Islamia College Peshawar",
      period: "2014–2015"
    },
    {
      degree: "Matriculation",
      institution: "Shawn Model High School, Paharpur",
      period: "2013"
    }
  ],
  experience: [
    {
      position: "Medical Officer",
      institution: "Samina International Hospital, Paharpur, D.I. Khan",
      period: "07/2023 – 06/2024",
      description: [
        "Handled OPD",
        "ER critical care",
        "Treatment planning",
        "Medical documentation"
      ]
    },
    {
      position: "House Officer",
      institution: "DHQ Hospital Dera Ismail Khan",
      period: "07/2022 – 07/2023",
      description: [
        "3 months rotation in Urology",
        "3 months rotation in General Surgery (including Minor OT)",
        "3 months rotation in Internal Medicine",
        "3 months rotation in Pediatrics (including NICU/Nursery)"
      ]
    }
  ],
  certifications: [
    {
      title: "2nd Internal Medicine Online Certificate Course",
      issuer: "Aga Khan University Hospital, Karachi",
      date: "May 18, 2025"
    }
  ],
  skills: [
    { name: "Advanced CPR", category: "Emergency", confidence: 95 },
    { name: "IV Line initialization", category: "Procedural", confidence: 90 },
    { name: "First Aid management", category: "Emergency", confidence: 95 },
    { name: "Ascitic Tap", category: "Procedural", confidence: 85 },
    { name: "NG Tube insertion", category: "Procedural", confidence: 88 },
    { name: "Lumbar Puncture", category: "Procedural", confidence: 82 },
    { name: "Urinary Catheterization", category: "Procedural", confidence: 90 },
    { name: "Pre/Post-Op clinical care", category: "Surgical", confidence: 85 },
    { name: "Normal delivery monitoring", category: "Obstetrics", confidence: 80 },
    { name: "Operating Theater surgical assistance", category: "Surgical", confidence: 85 },
    { name: "Critical ER Care", category: "Emergency", confidence: 92 },
    { name: "Medical Documentation", category: "Administrative", confidence: 95 }
  ]
};

export const typingTexts = [
  "Postgraduate Resident in Internal Medicine",
  "Clinical Consultant",
  "Stroke & Seizure Researcher"
];

export const metrics = [
  { label: "1st Div MBBS Honors", value: "1st Division" },
  { label: "3+ Years Residency & Clinical Experience", value: "3+ Years" },
  { label: "4+ Core Rotations Mastered", value: "4+ Rotations" }
];
