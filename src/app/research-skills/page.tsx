'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Activity, Filter, TrendingUp, CheckCircle2, Circle, Award, BookOpen, GraduationCap, Mail, Phone, MapPin, Menu, ChevronDown, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { doctorProfile } from '@/data/doctor-profile';

const skillCategories = ['All', 'Emergency', 'Procedural', 'Surgical', 'Obstetrics', 'Administrative'];

export default function ResearchSkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? doctorProfile.skills 
    : doctorProfile.skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-50 to-white">
      {/* Header */}
      <section className="py-16 bg-medical-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Clinical Skills</h1>
            <p className="text-medical-200 text-lg max-w-2xl mx-auto">
              Exploring medical research and showcasing clinical competencies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
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
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-medical-700">Literature Review</span>
                        <span className="text-medical-600 font-medium">100%</span>
                      </div>
                      <div className="w-full bg-medical-200 rounded-full h-2">
                        <div className="bg-medical-600 h-2 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-medical-700">Study Design</span>
                        <span className="text-medical-600 font-medium">85%</span>
                      </div>
                      <div className="w-full bg-medical-200 rounded-full h-2">
                        <div className="bg-medical-600 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-medical-700">Data Collection</span>
                        <span className="text-medical-600 font-medium">60%</span>
                      </div>
                      <div className="w-full bg-medical-200 rounded-full h-2">
                        <div className="bg-medical-600 h-2 rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-medical-700">Analysis & Publication</span>
                        <span className="text-medical-600 font-medium">20%</span>
                      </div>
                      <div className="w-full bg-medical-200 rounded-full h-2">
                        <div className="bg-medical-600 h-2 rounded-full" style={{ width: '20%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-medical-50 rounded-lg p-6 border border-medical-200">
                  <h4 className="font-semibold text-medical-900 mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-medical-600" />
                    Key Research Parameters
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Patient demographics analysis',
                      'Stroke severity assessment',
                      'Seizure onset timing',
                      'EEG correlation studies',
                      'Treatment response evaluation',
                      'Long-term outcome tracking'
                    ].map((param, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-medical-600 flex-shrink-0" />
                        <span className="text-medical-700 text-sm">{param}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skillCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center space-x-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>{category}</span>
                </Button>
              ))}
            </div>

            {/* Skills Grid */}
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

      {/* Certifications */}
      <section className="py-16 bg-medical-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-medical-900 mb-8 text-center">Certifications</h2>
            <div className="space-y-4">
              {doctorProfile.certifications.map((cert, index) => (
                <Card key={index} className="border-medical-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-medical-600 rounded-lg flex-shrink-0">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-medical-900 text-lg">{cert.title}</h3>
                        <p className="text-medical-600">{cert.issuer}</p>
                        <p className="text-medical-500 text-sm mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
