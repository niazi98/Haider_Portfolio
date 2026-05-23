'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Stethoscope, Phone, Mail, Youtube, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { doctorProfile } from '@/data/doctor-profile';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Research & Skills', href: '#research-skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-medical-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/Haider%20documents/Haider_Profile_Picture.jpeg"
                alt="Dr. Ghulam Haider Niazi"
                className="h-10 w-10 rounded-full object-cover border-2 border-medical-200 shadow-md"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-medical-900">Dr. Haider</span>
              <p className="text-xs text-medical-600">Internal Medicine</p>
            </div>
          </Link>

          {/* Desktop Navigation - Direct Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 rounded-md hover:bg-medical-100 text-medical-900 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a href={`tel:${doctorProfile.contact.phone}`} className="flex items-center space-x-1 text-medical-600 hover:text-medical-700">
              <Phone className="h-4 w-4" />
              <span>{doctorProfile.contact.phone}</span>
            </a>
            <div className="flex items-center space-x-3">
              <a
                href="https://youtube.com/@healthguidebydr.haider?si=xB_YoIQ4qJUZaLH1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medical-600 hover:text-medical-700 hover:scale-110 transition-transform"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/doctor_haider_niazi?igsh=aGI5cGJzNmFpcWp3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medical-600 hover:text-medical-700 hover:scale-110 transition-transform"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://web.facebook.com/haider.niazi.1690/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medical-600 hover:text-medical-700 hover:scale-110 transition-transform"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-medical-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-2"
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-medical-100 text-medical-900"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-medical-200">
                <a href={`tel:${doctorProfile.contact.phone}`} className="flex items-center space-x-2 px-4 py-2 text-medical-600">
                  <Phone className="h-4 w-4" />
                  <span>{doctorProfile.contact.phone}</span>
                </a>
                <a href={`mailto:${doctorProfile.contact.email[0]}`} className="flex items-center space-x-2 px-4 py-2 text-medical-600">
                  <Mail className="h-4 w-4" />
                  <span>{doctorProfile.contact.email[0]}</span>
                </a>
                <div className="flex items-center space-x-4 px-4 py-2">
                  <a
                    href="https://youtube.com/@healthguidebydr.haider?si=xB_YoIQ4qJUZaLH1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medical-600 hover:text-medical-700 hover:scale-110 transition-transform"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/doctor_haider_niazi?igsh=aGI5cGJzNmFpcWp3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medical-600 hover:text-medical-700 hover:scale-110 transition-transform"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://web.facebook.com/haider.niazi.1690/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medical-600 hover:text-medical-700 hover:scale-110 transition-transform"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
