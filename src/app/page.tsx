'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Award, Calendar, GraduationCap, Stethoscope, Download, MapPin, Mail, Phone, Send, Clock, Briefcase, Activity, Filter, TrendingUp, CheckCircle2, Circle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { doctorProfile, typingTexts, metrics } from '@/data/doctor-profile';
import TypewriterEffect from '@/components/TypewriterEffect';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    patientType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');

  const skillCategories = ['All', 'Emergency', 'Procedural', 'Surgical', 'Obstetrics', 'Administrative'];

  const filteredSkills = selectedSkillCategory === 'All' 
    ? doctorProfile.skills 
    : doctorProfile.skills.filter(skill => skill.category === selectedSkillCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formDataCopy = { ...formData };
    setFormData({ name: '', email: '', patientType: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataCopy),
      });

      if (response.ok) {
        setSubmitStatus('success');
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        setSubmitStatus('error');
        setFormData(formDataCopy);
      }
    } catch (error) {
      setSubmitStatus('error');
      setFormData(formDataCopy);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-medical-50 via-white to-medical-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-transparent to-indigo-500/10" />
        <div className="absolute inset-0 bg-grid-medical/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-slate-200/50 text-medical-700 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide">
                <Stethoscope className="h-4 w-4" />
                <span>{doctorProfile.currentStatus}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-900 mb-4 tracking-tight leading-tight">
                Dr. {doctorProfile.fullName}
              </h1>
              
              <div className="h-8 mb-6">
                <TypewriterEffect texts={typingTexts} />
              </div>
              
              <p className="text-lg text-medical-700 mb-8 max-w-xl leading-relaxed">
                {doctorProfile.currentAffiliation}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group hover:scale-105 transition-transform" onClick={() => scrollToSection('contact')}>
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform" onClick={() => scrollToSection('about')}>
                  View Journey
                </Button>
                <a
                  href="/Haider%20documents/DR_GHULAM_HAIDER_NIAZI_FlowCV_Resume_2026-04-03%20(1).pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-medical-100 hover:bg-medical-200 text-medical-700 rounded-lg font-medium transition-all hover:scale-105"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-md border border-slate-200/50">
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-medical-200 to-medical-400" />
                  <Image 
                    src="/Haider%20documents/Haider_Profile_Picture.jpeg"
                    alt="Dr. Ghulam Haider Niazi"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xl font-semibold tracking-wide">Dr. Ghulam Haider Niazi</p>
                    <p className="text-medical-100 mt-1 text-sm">Internal Medicine Specialist</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 border border-slate-200/50">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-8 w-8 text-medical-600" />
                    <div>
                      <p className="font-semibold text-medical-900">MBBS</p>
                      <p className="text-xs text-medical-600">1st Division</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-tr from-sky-400/10 via-transparent to-indigo-500/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border border-slate-200/50 hover:border-medical-400 transition-all hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-100 rounded-full mb-4">
                      {index === 0 && <Award className="h-8 w-8 text-medical-600" />}
                      {index === 1 && <Calendar className="h-8 w-8 text-medical-600" />}
                      {index === 2 && <GraduationCap className="h-8 w-8 text-medical-600" />}
                    </div>
                    <h3 className="text-3xl font-bold text-medical-900 mb-2 tracking-tight">{metric.value}</h3>
                    <p className="text-medical-600 leading-relaxed">{metric.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-medical-900 mb-4 tracking-tight">Professional Journey</h2>
            <p className="text-medical-600 text-lg max-w-2xl mx-auto leading-relaxed">
              A timeline of dedication, learning, and growth in the field of medicine
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
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
                    <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      item.type === 'current' ? 'bg-medical-600 text-white' :
                      item.type === 'milestone' ? 'bg-medical-500 text-white' :
                      item.type === 'work' ? 'bg-medical-400 text-white' :
                      'bg-medical-300 text-medical-900'
                    }`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    
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
                          
                          {item.title === 'MBBS' && (
                            <>
                              <div className="mt-4 grid grid-cols-2 gap-3">
                                <div className="relative rounded-xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md border border-slate-200/50 hover:shadow-xl transition-all hover:scale-105">
                                  <img
                                    src="/Haider%20documents/Graduation_picture.jpeg"
                                    alt="Graduation Day 1"
                                    className="w-full h-32 object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      console.error('Graduation image 1 failed to load:', target.src);
                                      target.style.display = 'none';
                                    }}
                                  />
                                </div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md border border-slate-200/50 hover:shadow-xl transition-all hover:scale-105">
                                  <img
                                    src="/Haider%20documents/Graduation_picture2.jpeg"
                                    alt="Graduation Day 2"
                                    className="w-full h-32 object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      console.error('Graduation image 2 failed to load:', target.src);
                                      target.style.display = 'none';
                                    }}
                                  />
                                </div>
                              </div>
                              <p className="text-center text-medical-600 text-xs italic leading-relaxed mt-2">
                                Commemorating academic milestones and clinical transitions at Gomal Medical College
                              </p>
                            </>
                          )}
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

      {/* Research & Skills Section */}
      <section id="research-skills" className="py-16 bg-gradient-to-b from-medical-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="border-2 border-medical-600 shadow-xl bg-gradient-to-br from-medical-50 to-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-medical-600 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-medical-900">Current Research</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Ongoing medical research focused on improving patient outcomes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-medical-900 mb-3">
                    {doctorProfile.researchTopic}
                  </h3>
                  <p className="text-medical-700 mb-4">
                    This research aims to investigate the frequency and patterns of seizures in patients presenting with acute ischemic stroke, 
                    with the goal of improving early detection, prevention strategies, and overall patient management protocols.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-medical-200">
                  <h4 className="font-semibold text-medical-900 mb-4 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-medical-600" />
                    Research Progress
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Literature Review', progress: 100 },
                      { label: 'Study Design', progress: 85 },
                      { label: 'Data Collection', progress: 60 },
                      { label: 'Analysis & Publication', progress: 20 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-medical-700">{item.label}</span>
                          <span className="text-medical-600 font-medium">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-medical-200 rounded-full h-2">
                          <div className="bg-medical-600 h-2 rounded-full" style={{ width: `${item.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-medical-900 mb-4">Clinical Competencies</h2>
              <p className="text-medical-600 max-w-2xl mx-auto">
                A comprehensive overview of procedural skills and clinical expertise
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedSkillCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedSkillCategory(category)}
                  className="flex items-center space-x-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>{category}</span>
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-medical-200 hover:border-medical-400 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-medical-900 mb-1">{skill.name}</h3>
                          <span className="text-xs text-medical-600 bg-medical-100 px-2 py-1 rounded-full">
                            {skill.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {skill.confidence >= 90 && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                          {skill.confidence >= 80 && skill.confidence < 90 && <Circle className="h-5 w-5 text-medical-600 fill-medical-600" />}
                          {skill.confidence < 80 && <Circle className="h-5 w-5 text-medical-600" />}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-medical-700">Proficiency</span>
                          <span className="text-medical-600 font-medium">{skill.confidence}%</span>
                        </div>
                        <div className="w-full bg-medical-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              skill.confidence >= 90 ? 'bg-green-600' :
                              skill.confidence >= 80 ? 'bg-medical-600' :
                              skill.confidence >= 70 ? 'bg-medical-500' :
                              'bg-medical-400'
                            }`}
                            style={{ width: `${skill.confidence}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-medical-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-medical-900 mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-medical-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need a consultation, want to discuss research, or have a patient referral, I'm here to help
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-medical-900 mb-6 tracking-tight">Contact Information</h3>
                <p className="text-medical-600 mb-8 leading-relaxed">
                  Feel free to reach out through any of the following channels. I typically respond within 24-48 hours.
                </p>
              </div>

              <Card className="bg-white/80 backdrop-blur-md border border-slate-200/50 hover:shadow-xl transition-all">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-medical-100 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-900 mb-1">Phone</h3>
                      <a href={`tel:${doctorProfile.contact.phone}`} className="text-medical-600 hover:text-medical-700">
                        {doctorProfile.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-medical-100 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-900 mb-1">Email</h3>
                      <a href={`mailto:${doctorProfile.contact.email[0]}`} className="text-medical-600 hover:text-medical-700">
                        {doctorProfile.contact.email[0]}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-medical-100 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-900 mb-1">Location</h3>
                      <p className="text-medical-600">
                        {doctorProfile.location.village}, {doctorProfile.location.tehsil}<br />
                        {doctorProfile.location.district}, {doctorProfile.location.province}<br />
                        {doctorProfile.location.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-medical-100 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-900 mb-1">Response Time</h3>
                      <p className="text-medical-600">Usually within 24-48 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <a
                href="/Haider documents/DR_GHULAM_HAIDER_NIAZI_FlowCV_Resume_2026-04-03 (1).pdf"
                download
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-medical-100 hover:bg-medical-200 text-medical-700 rounded-lg font-medium transition-all hover:scale-105 border border-medical-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Professional CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 backdrop-blur-md border border-slate-200/50 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="patientType">Patient Type *</Label>
                      <select
                        id="patientType"
                        required
                        value={formData.patientType}
                        onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                        className="mt-2 w-full px-3 py-2 border border-slate-200 rounded-md"
                      >
                        <option value="">Select patient type</option>
                        <option value="new-patient">New Patient</option>
                        <option value="follow-up">Follow-up</option>
                        <option value="consultation">Consultation</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your inquiry or message..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-100 text-green-700 rounded-md">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-100 text-red-700 rounded-md">
                        There was an error sending your message. Please try again.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full hover:scale-105 transition-transform"
                      size="lg"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
