import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Boolean(process.env.EMAIL_SERVER_SECURE === 'true'),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Prepare the email to the company
    const companyEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Job Title:</strong> ${data.jobTitle}</p>
      <p><strong>Business Segment:</strong> ${data.businessSegment}</p>
      <p><strong>Help Type:</strong> ${data.helpType}</p>
      <p><strong>Referral Source:</strong> ${data.referralSource || 'Not specified'}</p>
      <p><strong>Additional Details:</strong> ${data.additionalDetails || 'None provided'}</p>
    `;

    // Prepare the acknowledgment email to the customer
    const customerEmailContent = `
      <h2>Thank you for contacting Terafence</h2>
      <p>Dear ${data.firstName},</p>
      <p>We have received your inquiry and a member of our team will get back to you shortly.</p>
      <p>Here's a summary of the information you provided:</p>
      <ul>
        <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Company:</strong> ${data.company}</li>
        <li><strong>Help Type:</strong> ${data.helpType}</li>
      </ul>
      <p>If you need to add any additional information, please reply to this email.</p>
      <p>Best regards,<br>The Terafence Team</p>
    `;

    try {
      // Send email to the company
      await transporter.sendMail({
        from: `"Terafence Website" <${process.env.EMAIL_FROM}>`,
        to: 'info@terafence.in',
        subject: `New Contact Form: ${data.firstName} ${data.lastName} from ${data.company}`,
        html: companyEmailContent,
        replyTo: data.email,
      });

      // Send acknowledgment email to the customer
      await transporter.sendMail({
        from: `"Terafence" <${process.env.EMAIL_FROM}>`,
        to: data.email,
        subject: 'Thank you for contacting Terafence',
        html: customerEmailContent,
        replyTo: 'info@terafence.us',
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue execution even if email fails, to provide feedback to user
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}