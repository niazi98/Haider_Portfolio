# Dr. Ghulam Haider Niazi - Professional Portfolio

A comprehensive, enterprise-grade professional portfolio website for Dr. Ghulam Haider Niazi, FCPS-II Postgraduate Resident in Internal Medicine at MTI DHQ Teaching Hospital, Dera Ismail Khan.

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 14 (App Router) with React 18 and TypeScript
- **Styling**: Tailwind CSS with custom medical theme colors
- **Animations**: Framer Motion for premium, smooth animations
- **Database**: MongoDB (via Mongoose) for dynamic content management
- **UI Components**: Lucide React icons, custom Shadcn/ui-style components
- **Forms**: React Hook Form with Zod validation
- **Maps**: Google Maps integration

## 📁 Project Structure

```
haider-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form API
│   │   ├── about/             # Professional timeline page
│   │   ├── contact/           # Contact page with form & maps
│   │   ├── gallery/           # Media gallery with lightbox
│   │   ├── research-skills/   # Research & clinical skills
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # UI components (Button, Card, Input, etc.)
│   │   ├── Navigation.tsx    # Site navigation
│   │   ├── Footer.tsx        # Site footer
│   │   └── TypewriterEffect.tsx
│   ├── data/                 # Static data
│   │   └── doctor-profile.ts # Doctor's profile data
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts         # Helper functions
│   │   └── mongodb.ts       # MongoDB connection
│   ├── models/               # MongoDB schemas
│   │   ├── Message.ts       # Contact form messages
│   │   ├── Publication.ts   # Research publications
│   │   └── GalleryItem.ts    # Gallery items
│   └── types/                # TypeScript type definitions
│       └── index.ts
├── public/                   # Static assets
│   └── Haider documents/     # Profile images, certificates
├── .env.local               # Environment variables
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Design Features

- **Medical Theme**: Deep oceanic clinical blues (#0f172a, #0284c7), pristine whites, and soft teal accents
- **Premium Animations**: Smooth Framer Motion animations throughout
- **Responsive Design**: Fully responsive for all device sizes
- **Interactive Components**: Typewriter effects, lightbox gallery, skill progress bars
- **Modern UI**: Clean, professional medical aesthetic

## 📄 Pages

### 1. Home Page (/)
- Hero section with typing effect
- Quick metrics banner (MBBS honors, experience, rotations)
- Research highlight card
- Call-to-action sections

### 2. About Page (/about)
- Interactive vertical timeline
- Professional journey from education to current residency
- Training transfer history
- Current status card

### 3. Research & Skills Page (/research-skills)
- Current research focus on stroke and seizures
- Progress tracker for research phases
- Key research parameters
- Clinical competencies grid with filtering
- Certifications section

### 4. Gallery Page (/gallery)
- Masonry layout for graduation and hospital photos
- Category filtering (Graduation, Hospital, Certificate)
- Lightbox functionality for image viewing
- Images sourced from local assets

### 5. Contact Page (/contact)
- Contact information (phone, email, location)
- Google Maps integration
- MongoDB-powered contact form
- Form validation with success/error states

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud instance)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/haider-portfolio
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🗄️ Database Setup

### MongoDB Collections

The application uses MongoDB with the following collections:

1. **Messages**: Stores contact form submissions
   - name, email, patientType, message, createdAt

2. **Publications**: Research publications and articles
   - title, abstract, status, progress, parameters, createdAt

3. **GalleryItem**: Gallery metadata
   - title, category, imageUrl, description, createdAt

### Seed Data (Optional)

You can seed initial data using the MongoDB shell or create a seed script.

## 📝 Doctor's Profile Data

All profile data is centralized in `src/data/doctor-profile.ts` including:
- Personal information
- Education history
- Professional experience
- Certifications
- Clinical skills
- Research focus
- Contact details

Update this file to modify the displayed information.

## 🖼️ Images

Profile images and certificates are located in:
- `public/Haider documents/` - Local assets from the provided directory

To add new images:
1. Place images in the `public/Haider documents/` directory
2. Update the gallery items in `src/app/gallery/page.tsx`

## 🎯 Key Features

- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type-Safe**: Full TypeScript implementation
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling with user feedback
- **Responsive**: Mobile-first responsive design
- **Accessible**: WCAG compliant where possible
- **Performance**: Optimized images, lazy loading, code splitting

## 📞 Contact Information

- **Phone**: 03477922753
- **Email**: ghulamhaiderniazi.792@gmail.com
- **Location**: Paharpur, Dera Ismail Khan, Khyber Pakhtunkhwa, Pakistan

## 🏥 Current Affiliation

Medical-A Unit, MTI DHQ Teaching Hospital / Gomal Medical College, Dera Ismail Khan, KP, Pakistan

## 🔐 Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `NEXT_PUBLIC_APP_URL`: Application URL

## 📄 License

This project is for Dr. Ghulam Haider Niazi's professional use.

## 👨‍⚕️ About Dr. Haider

Dr. Ghulam Haider Niazi is a 3rd Year FCPS-II Postgraduate Resident in Internal Medicine at MTI DHQ Teaching Hospital, Dera Ismail Khan. His current research focuses on "Frequency of seizures in patients of acute ischemic stroke."

**Education**: MBBS from Gomal Medical College (1st Division)
**Experience**: Medical Officer at Samina International Hospital, House Officer at DHQ Hospital
**Certifications**: Internal Medicine Certificate Course from Aga Khan University Hospital (2025)

---

Built with ❤️ for Dr. Ghulam Haider Niazi
