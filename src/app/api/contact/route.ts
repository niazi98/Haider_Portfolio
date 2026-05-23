import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const ADMIN_EMAIL = 'niaziumar98@gmail.com';
const DB_TIMEOUT = 5000; // 5 seconds timeout

// Timeout wrapper for database operations
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => 
      setTimeout(() => reject(new Error('Database operation timed out')), timeoutMs)
    )
  ]);
}

// Create Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || ADMIN_EMAIL,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASSWORD,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, patientType, message } = body;

    // Validate required fields
    if (!name || !email || !patientType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Nodemailer
    try {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: process.env.SMTP_FROM_EMAIL || ADMIN_EMAIL,
        to: ADMIN_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Patient Type:</strong> ${patientType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p><em>This message was sent from the Dr. Ghulam Haider Niazi portfolio website.</em></p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${ADMIN_EMAIL} from ${name} (${email})`);
      
      return NextResponse.json(
        { message: 'Message sent successfully', emailSent: true },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Fallback: Log the submission and return success
      console.log(`Contact form submission (email fallback): From ${name} (${email}), Type: ${patientType}`);
      console.log(`Message: ${message}`);
      
      return NextResponse.json(
        { message: 'Message sent successfully (email service unavailable)', fallback: true },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
