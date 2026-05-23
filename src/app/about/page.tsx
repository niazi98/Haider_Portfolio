'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { doctorProfile } from '@/data/doctor-profile';

const timeline = [
  {
    year: '2026',
    title: '3rd Year FCPS-II Residency',
    institution: 'MTI DHQ Teaching Hospital / Gomal Medical College, D.I. Khan',
    description: 'Postgraduate Resident in Internal Medicine under Assistant Professor Dr. Imran Ullah',
    icon: Briefcase,
    type: 'current'
  },
  {
    year: '2024-2025',
    title: 'Training Transfer',
    institution: 'Saidu Group of Teaching Hospitals → DHQ Teaching Hospital D.I. Khan',
    description: 'Official institutional re-registration calculated transfer from Swat to MTI DHQ Teaching Hospital D.I. Khan under supervisor Assistant Professor Dr. Imran Ullah to serve local medical capacities in home region',
    icon: MapPin,
    type: 'milestone'
  },
  {
    year: '2024',
    title: 'FCPS-II Training Initiated',
    institution: 'Saidu Sharif Medical College / Saidu Group of Teaching Hospitals, Swat',
    description: 'Joined postgraduate training program on 11-01-2024',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2023-2024',
    title: 'Medical Officer',
    institution: 'Samina International Hospital, Paharpur, D.I. Khan',
    description: 'Handled OPD, ER critical care, treatment planning, and medical documentation',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2022-2023',
    title: 'House Officer',
    institution: 'DHQ Hospital Dera Ismail Khan',
    description: 'Intense 4-ward rotation mastery including Urology, General Surgery, Internal Medicine, and Pediatrics (including NICU/Nursery)',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2016-2022',
    title: 'MBBS',
    institution: 'Gomal Medical College, D.I. Khan',
    description: 'Graduated with 1st Division Honors across all MBBS Professionals at Gomal Medical College - a testament to academic excellence and clinical dedication',
    icon: Award,
    type: 'education'
  },
  {
    year: '2014-2015',
    title: 'F.Sc (Pre-Medical)',
    institution: 'Islamia College Peshawar',
    description: 'Foundational journey at prestigious Islamia College Peshawar, establishing strong academic groundwork for medical career',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2013',
    title: 'Matriculation',
    institution: 'Shawn Model High School, Paharpur',
    description: 'Secondary Education with distinction',
    icon: GraduationCap,
    type: 'education'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-medical-900 to-medical-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-transparent to-indigo-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional Journey</h1>
            <p className="text-medical-200 text-lg max-w-2xl mx-auto leading-relaxed">
              A timeline of dedication, learning, and growth in the field of medicine
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-medical-200 transform md:-translate-x-1/2" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                  }`}
                >
                  <div className={`flex items-start ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {/* Icon */}
                    <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      item.type === 'current' ? 'bg-medical-600 text-white' :
                      item.type === 'milestone' ? 'bg-medical-500 text-white' :
                      item.type === 'work' ? 'bg-medical-400 text-white' :
                      'bg-medical-300 text-medical-900'
                    }`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pl-8' : 'md:ml-auto md:pr-8'
                    }`}>
                      <Card className={`bg-white/80 backdrop-blur-md border-2 ${
                        item.type === 'current' ? 'border-medical-600 shadow-lg hover:shadow-xl' :
                        item.type === 'milestone' ? 'border-medical-400 hover:border-medical-500' :
                        'border-slate-200/50 hover:border-medical-300'
                      } transition-all hover:scale-105`}>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm font-semibold tracking-wide ${
                              item.type === 'current' ? 'text-medical-600' : 'text-medical-500'
                            }`}>
                              {item.year}
                            </span>
                            {item.type === 'current' && (
                              <span className="px-2 py-1 bg-medical-100 text-medical-700 text-xs rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <CardTitle className="text-xl tracking-tight">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-medical-700 font-medium mb-2">{item.institution}</p>
                          <p className="text-medical-600 text-sm leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Card */}
      <section className="py-16 bg-gradient-to-tr from-sky-400/10 via-transparent to-indigo-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/80 backdrop-blur-md border border-slate-200/50 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-900 tracking-tight">Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-medical-900 tracking-tight">{doctorProfile.currentStatus}</p>
                    <p className="text-medical-600 leading-relaxed">{doctorProfile.currentAffiliation}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-medical-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-medical-900 tracking-tight">Location</p>
                    <p className="text-medical-600 leading-relaxed">
                      {doctorProfile.location.village}, {doctorProfile.location.tehsil},<br />
                      {doctorProfile.location.district}, {doctorProfile.location.province},<br />
                      {doctorProfile.location.country}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
