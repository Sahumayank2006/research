import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      email, 
      fullName, 
      registrationId, 
      participantCategory, 
      trackPreference, 
      participationType 
    } = data;

    // Check if credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials missing in environment variables');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construct the elegant HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Research-O-Thon 2025 Registration</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, sans-serif;
            background-color: #F7F5EF;
            color: #101820;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-top: 6px solid #0A1F44;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(10, 31, 68, 0.1);
          }
          .header {
            background-color: #0A1F44;
            color: #F7F5EF;
            padding: 30px 40px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 28px;
            letter-spacing: -0.02em;
          }
          .header p {
            color: #C79A2B;
            margin: 5px 0 0 0;
            font-size: 12px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }
          .content {
            padding: 40px;
          }
          .greeting {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .message {
            line-height: 1.6;
            color: #2D3748;
            margin-bottom: 30px;
          }
          .pass-card {
            background-color: #F7F5EF;
            border: 2px solid rgba(10, 31, 68, 0.1);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
            position: relative;
          }
          .pass-header {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 12px;
            color: #C79A2B;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(10, 31, 68, 0.1);
            padding-bottom: 10px;
          }
          .detail-row {
            margin-bottom: 10px;
          }
          .detail-label {
            font-size: 12px;
            color: #5A6577;
            text-transform: uppercase;
            display: block;
            margin-bottom: 2px;
          }
          .detail-val {
            font-weight: 600;
            color: #0A1F44;
            font-size: 15px;
          }
          .registration-id {
            margin-top: 20px;
            text-align: center;
            background-color: #0A1F44;
            color: #F7F5EF;
            padding: 10px;
            border-radius: 4px;
            font-family: 'IBM Plex Mono', monospace;
            letter-spacing: 0.05em;
          }
          .next-steps {
            background-color: #0A1F44;
            color: #F7F5EF;
            padding: 30px 40px;
          }
          .next-steps h3 {
            color: #C79A2B;
            margin-top: 0;
            margin-bottom: 15px;
          }
          .next-steps ul {
            padding-left: 20px;
            margin-bottom: 0;
          }
          .next-steps li {
            margin-bottom: 10px;
            font-size: 14px;
            color: rgba(247, 245, 239, 0.9);
          }
          .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #5A6577;
            background-color: #F7F5EF;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Research-O-Thon 2025</h1>
            <p>Official Entry Pass</p>
          </div>
          
          <div class="content">
            <div class="greeting">Dear ${fullName},</div>
            
            <div class="message">
              Thank you for registering for Research-O-Thon 2025! We are thrilled to welcome you to this 48-hour research drafting sprint. Below is your official registration summary and digital entry pass.
            </div>
            
            <div class="pass-card">
              <div class="pass-header">Participant Details</div>
              
              <div class="detail-row">
                <span class="detail-label">Category</span>
                <span class="detail-val">${participantCategory}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Track Preference</span>
                <span class="detail-val">${trackPreference}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Participation Type</span>
                <span class="detail-val">${participationType}</span>
              </div>
              
              <div class="registration-id">
                ID: ${registrationId}
              </div>
            </div>
            
            <div class="message">
              <em>Note: Your registration will be fully confirmed once your ₹300 payment is verified by our organizing team.</em>
            </div>
          </div>
          
          <div class="next-steps">
            <h3>Next Steps</h3>
            <ul>
              <li><strong>Save this email:</strong> You will need to show your Registration ID at the desk on Day 1.</li>
              <li><strong>Preparation:</strong> Don't forget to bring your laptop, charger, and a valid ID.</li>
              <li><strong>Updates:</strong> Join the official participant WhatsApp group (link will be sent separately).</li>
            </ul>
          </div>
          
          <div class="footer">
            &copy; 2025 Amity University MP & IEEE MP Section.<br>
            If you have any questions, reply to this email.
          </div>
        </div>
      </body>
      </html>
    `;

    // Mail options
    const mailOptions = {
      from: `"Research-O-Thon 2025" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Registration Received - Research-O-Thon 2025 [${registrationId}]`,
      html: htmlTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
