import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Ghulam Haider Niazi - Internal Medicine Specialist',
  description: 'Professional portfolio of Dr. Ghulam Haider Niazi, FCPS-II Postgraduate Resident in Internal Medicine at MTI DHQ Teaching Hospital, Dera Ismail Khan.',
  keywords: ['Dr. Ghulam Haider Niazi', 'Internal Medicine', 'FCPS-II', 'Postgraduate Resident', 'Medical Doctor', 'Dera Ismail Khan'],
  icons: {
    icon: '/icon.png',
  },
  verification: {
    google: '-vN2uZ-I9WgEsMozry0B58c_cXsRuTY29PvAYBmRdE4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
