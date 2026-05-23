'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, GraduationCap, Stethoscope, Award, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Gallery items based on local assets
const galleryItems = [
  {
    id: 1,
    title: 'Graduation Day',
    category: 'graduation',
    image: '/Haider documents/Graduation_picture.jpeg',
    description: 'MBBS Graduation from Gomal Medical College - 1st Division Honors'
  },
  {
    id: 2,
    title: 'Graduation Ceremony',
    category: 'graduation',
    image: '/Haider documents/Graduation_picture2.jpeg',
    description: 'Celebrating academic achievement with distinction'
  },
  {
    id: 3,
    title: 'House Job Training',
    category: 'clinical',
    image: '/Haider documents/HouseJob.jpeg',
    description: '4-ward rotation mastery at DHQ Hospital D.I. Khan'
  },
  {
    id: 4,
    title: 'Clinical Training',
    category: 'clinical',
    image: '/Haider documents/7.jpeg',
    description: 'Intensive clinical training experience'
  },
  {
    id: 5,
    title: 'Professional Profile',
    category: 'certificate',
    image: '/Haider documents/Haider_Profile_Picture.jpeg',
    description: 'Professional profile photograph'
  },
  {
    id: 6,
    title: 'Training Documentation',
    category: 'certificate',
    image: '/Haider documents/8.jpeg',
    description: 'Official training certificates and documentation'
  },
  {
    id: 7,
    title: 'Medical Training',
    category: 'clinical',
    image: '/Haider documents/9.jpeg',
    description: 'Hands-on medical training experience'
  },
  {
    id: 8,
    title: 'Clinical Excellence',
    category: 'clinical',
    image: '/Haider documents/10.jpeg',
    description: 'Demonstrating clinical excellence in practice'
  }
];

const categories = ['All', 'Graduation Days', 'Clinical Training', 'Certificates'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => {
      if (selectedCategory === 'Graduation Days') return item.category === 'graduation';
      if (selectedCategory === 'Clinical Training') return item.category === 'clinical';
      if (selectedCategory === 'Certificates') return item.category === 'certificate';
      return true;
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Graduation Days': return GraduationCap;
      case 'Clinical Training': return Stethoscope;
      case 'Certificates': return Award;
      default: return FileText;
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
            <p className="text-medical-200 text-lg max-w-2xl mx-auto">
              A visual journey through medical education, training, and professional milestones
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-tr from-sky-400/10 via-transparent to-indigo-500/10 border-b border-medical-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category);
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center space-x-2 hover:scale-105 transition-transform bg-white/80 backdrop-blur-md border border-slate-200/50"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white/80 backdrop-blur-md border border-slate-200/50 hover:border-medical-400 transition-all hover:shadow-xl cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden bg-medical-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0f2fe" width="400" height="300"/%3E%3Ctext fill="%230284c7" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-medical-900 mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-medical-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e0f2fe" width="800" height="600"/%3E%3Ctext fill="%230284c7" font-family="Arial" font-size="30" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-medical-200">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
