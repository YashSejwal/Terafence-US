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

    // Advanced professional template for customer email
    const advancedEmailTemplate = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Terafence</title>
    <!--[if mso]>
    <style type="text/css">
        body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
    </style>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, Helvetica, sans-serif; background-color: #f6f9fc; color: #333333; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <!-- Preheader text -->
    <div style="display: none; max-height: 0px; overflow: hidden;">
        Thank you for reaching out to Terafence. Your inquiry has been received.
    </div>
    
    <!-- Email container -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%; background-color: #f6f9fc;">
        <tr>
            <td align="center" valign="top" style="padding: 30px 10px;">
                <!-- Email content -->
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);">
                    <!-- Header -->
                    <tr>
                        <td align="center" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);">
                                <tr>
                                    <td align="center" valign="middle" style="padding: 30px 0;">
                                        <img src="/images/terafence.png" alt="Terafence" width="180" style="display: block; border: 0; max-width: 180px;">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Main content -->
                    <tr>
                        <td align="center" valign="top" style="padding: 30px 40px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <!-- Heading -->
                                <tr>
                                    <td style="padding-bottom: 20px; border-bottom: 1px solid #e5e7eb;">
                                        <h1 style="color: #1e3a8a; font-size: 24px; margin: 0; font-weight: 600;">Thank You for Contacting Us</h1>
                                    </td>
                                </tr>
                                
                                <!-- Message -->
                                <tr>
                                    <td style="padding-top: 25px; padding-bottom: 10px;">
                                        <p style="margin: 0 0 15px 0; line-height: 1.5; font-size: 16px;">Dear ${data.firstName},</p>
                                        <p style="margin: 0 0 20px 0; line-height: 1.5; font-size: 16px;">Thank you for your interest in Terafence's solutions. We've received your inquiry and our team is already reviewing your information.</p>
                                        <p style="margin: 0 0 20px 0; line-height: 1.5; font-size: 16px;">A member of our team will contact you shortly to discuss how we can help with your specific needs. In the meantime, please feel free to explore our <a href="https://terafence-us.vercel.app/download" style="color: #3b82f6; text-decoration: none; font-weight: 500;">resource center</a> for more information.</p>
                                    </td>
                                </tr>
                                
                                <!-- Information summary -->
                                <tr>
                                    <td style="padding: 20px 0;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #3b82f6;">
                                            <tr>
                                                <td style="padding: 20px;">
                                                    <p style="margin: 0 0 15px 0; color: #1e3a8a; font-weight: 600; font-size: 16px;">Your Information Summary</p>
                                                    
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td width="35%" style="padding: 8px 0; color: #64748b; font-weight: 500; font-size: 15px; vertical-align: top;">Name:</td>
                                                            <td width="65%" style="padding: 8px 0; color: #0f172a; font-size: 15px; vertical-align: top;">${data.firstName} ${data.lastName}</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="35%" style="padding: 8px 0; color: #64748b; font-weight: 500; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">Email:</td>
                                                            <td width="65%" style="padding: 8px 0; color: #0f172a; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">${data.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="35%" style="padding: 8px 0; color: #64748b; font-weight: 500; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">Phone:</td>
                                                            <td width="65%" style="padding: 8px 0; color: #0f172a; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">${data.phone}</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="35%" style="padding: 8px 0; color: #64748b; font-weight: 500; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">Company:</td>
                                                            <td width="65%" style="padding: 8px 0; color: #0f172a; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">${data.company}</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="35%" style="padding: 8px 0; color: #64748b; font-weight: 500; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">Inquiry Type:</td>
                                                            <td width="65%" style="padding: 8px 0; color: #0f172a; font-size: 15px; vertical-align: top; border-top: 1px solid #e5e7eb;">${data.helpType}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                
                                <!-- Next steps -->
                                <tr>
                                    <td style="padding: 10px 0 25px;">
                                        <p style="margin: 0 0 15px 0; line-height: 1.5; font-size: 16px;">If you need to provide additional information, simply reply to this email and your message will be added to your inquiry.</p>
                                    </td>
                                </tr>
                                
                                <!-- CTA -->
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px;">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align="center" style="border-radius: 6px; background-color: #1e3a8a;">
                                                    <a href="https://terafence-us.vercel.app" target="_blank" style="border: none; border-radius: 6px; color: #ffffff; display: inline-block; font-size: 16px; font-weight: 500; line-height: 1.2; padding: 15px 25px; text-decoration: none; text-align: center;">Explore Our Solutions</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                
                                <!-- Signature -->
                                <tr>
                                    <td style="padding-top: 15px; border-top: 1px solid #e5e7eb;">
                                        <p style="margin: 0 0 5px 0; line-height: 1.5; font-size: 16px;">Best regards,</p>
                                        <p style="margin: 0; line-height: 1.5; font-size: 16px; font-weight: 600; color: #1e3a8a;">Terafence US</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td align="center" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                                <tr>
                                    <td align="center" valign="top" style="padding: 25px 40px;">
                                        <!-- Social media icons -->
                                        <table border="0" cellpadding="0" cellspacing="0" width="150">
                                            <tr>
                                                <td align="center" width="50">
                                                    <a href="https://linkedin.com/company/terafence" target="_blank" style="color: #718096; text-decoration: none;">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" width="24" height="24" style="display: block; border: 0;">
                                                    </a>
                                                </td>
                                                <td align="center" width="50">
                                                    <a href="https://twitter.com/terafence" target="_blank" style="color: #718096; text-decoration: none;">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" height="24" style="display: block; border: 0;">
                                                    </a>
                                                </td>
                                                <td align="center" width="50">
                                                    <a href="https://facebook.com/terafence" target="_blank" style="color: #718096; text-decoration: none;">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" height="24" style="display: block; border: 0;">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Contact and legal -->
                                        <p style="margin: 20px 0 0 0; font-size: 12px; line-height: 1.5; color: #718096; text-align: center;">
                                            This is an automated message. If you need assistance, please contact <a href="mailto:support@terafence.us" style="color: #3b82f6; text-decoration: none;">support@terafence.us</a>
                                        </p>
                                        <p style="margin: 10px 0 0 0; font-size: 12px; line-height: 1.5; color: #718096; text-align: center;">
                                            Terafence US | 12788 ROYAL OAKS LN, FARMERS BRANCH, TX 75234
                                        </p>
                                        <p style="margin: 10px 0 0 0; font-size: 12px; line-height: 1.5; color: #718096; text-align: center;">
                                            <a href="https://terafence-us.vercel.app" target="_blank" style="color: #3b82f6; text-decoration: none;">Privacy Policy</a> &nbsp;&bull;&nbsp; 
                                            <a href="https://terafence-us.vercel.app" target="_blank" style="color: #3b82f6; text-decoration: none;">Terms of Service</a>
                                        </p>
                                        <p style="margin: 10px 0 0 0; font-size: 12px; line-height: 1.5; color: #718096; text-align: center;">
                                            &copy; 2025 Terafence US. All rights reserved.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    try {
      // Send email to company recipients
      await transporter.sendMail({
        from: `"Terafence Website" <${process.env.EMAIL_FROM}>`,
        to: 'amandeep@terafence.in, info@terafence.in', // Send to both addresses
        subject: `New Contact Form: ${data.firstName} ${data.lastName} from ${data.company}`,
        html: companyEmailContent,
        replyTo: data.email,
      });

      // Send advanced acknowledgment email to the customer
      await transporter.sendMail({
        from: `"Terafence" <${process.env.EMAIL_FROM}>`,
        to: data.email,
        subject: 'Thank You for Contacting Terafence',
        html: advancedEmailTemplate,
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