'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { doctorProfile } from '@/data/doctor-profile';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    patientType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Clear form state immediately for instant feedback
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
        // Trigger instant confirmation alert
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        setSubmitStatus('error');
        // Restore form data on error
        setFormData(formDataCopy);
      }
    } catch (error) {
      setSubmitStatus('error');
      // Restore form data on error
      setFormData(formDataCopy);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-medical-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need a consultation, want to discuss research, or have a patient referral, I'm here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-medical-900 mb-6 tracking-tight">Contact Information</h2>
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

              {/* Google Maps */}
              <Card className="bg-white/80 backdrop-blur-md border border-slate-200/50 hover:shadow-xl transition-all overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg tracking-tight">Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108899.83967973265!2d70.8!3d31.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922750b0d0d0d0d%3A0x0!2sDera%20Ismail%20Khan%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </CardContent>
              </Card>

              {/* CV Download */}
              <a
                href="/Haider documents/DR_GHULAM_HAIDER_NIAZI_FlowCV_Resume_2026-04-03 (1).pdf"
                download
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-medical-100 hover:bg-medical-200 text-medical-700 rounded-lg font-medium transition-all hover:scale-105 border border-medical-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Professional CV
              </a>
            </motion.div>

            {/* Contact Form */}
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
                      <Select
                        id="patientType"
                        required
                        value={formData.patientType}
                        onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                        className="mt-2"
                      >
                        <option value="">Select patient type</option>
                        <option value="new-patient">New Patient</option>
                        <option value="follow-up">Follow-up</option>
                        <option value="consultation">Consultation</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </Select>
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
