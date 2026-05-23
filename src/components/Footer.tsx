'use client';

import Link from 'next/link';
import { Stethoscope, Mail, Phone, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';
import { doctorProfile } from '@/data/doctor-profile';

export default function Footer() {
  return (
    <footer className="bg-medical-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-medical-400" />
              <span className="font-bold text-xl">Dr. Haider</span>
            </div>
            <p className="text-medical-200 text-sm mb-4">
              {doctorProfile.currentStatus}
            </p>
            <p className="text-medical-300 text-sm">
              {doctorProfile.currentAffiliation}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-medical-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-medical-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research-skills" className="text-medical-200 hover:text-white transition-colors">
                  Research & Skills
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-medical-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-medical-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-medical-400 mt-0.5" />
                <a href={`tel:${doctorProfile.contact.phone}`} className="text-medical-200 hover:text-white">
                  {doctorProfile.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-medical-400 mt-0.5" />
                <a href={`mailto:${doctorProfile.contact.email[0]}`} className="text-medical-200 hover:text-white">
                  {doctorProfile.contact.email[0]}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-medical-400 mt-0.5" />
                <span className="text-medical-200">
                  {doctorProfile.location.village}, {doctorProfile.location.tehsil}<br />
                  {doctorProfile.location.district}, {doctorProfile.location.province}<br />
                  {doctorProfile.location.country}
                </span>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://youtube.com/@healthguidebydr.haider?si=xB_YoIQ4qJUZaLH1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medical-200 hover:text-white hover:scale-110 transition-transform"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/doctor_haider_niazi?igsh=aGI5cGJzNmFpcWp3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medical-200 hover:text-white hover:scale-110 transition-transform"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://web.facebook.com/haider.niazi.1690/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medical-200 hover:text-white hover:scale-110 transition-transform"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-medical-700 mt-8 pt-8 text-center text-medical-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Ghulam Haider Niazi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
