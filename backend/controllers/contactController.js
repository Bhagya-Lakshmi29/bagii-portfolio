const nodemailer = require('nodemailer');

// Create reusable transporter using Gmail SMTP
// Set EMAIL_USER and EMAIL_PASS in your .env file
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  // If email credentials are not configured, log and return success (dev mode)
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('📬 [DEV MODE] Contact form submission received (email not configured):');
    console.log(`  Name: ${name}`);
    console.log(`  Email: ${email}`);
    console.log(`  Message: ${message}`);
    console.log('  ℹ️  Set EMAIL_USER and EMAIL_PASS in .env to enable real email delivery.');
    return res.status(200).json({ success: true, message: 'Message received!' });
  }

  try {
    const transporter = createTransporter();

    // Email to portfolio owner
    const ownerMailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact from ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #F8FAFC; padding: 32px; border-radius: 12px;">
          <h2 style="color: #7C3AED; margin-bottom: 24px;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E293B; color: #94A3B8; width: 100px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E293B; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E293B; color: #94A3B8;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1E293B;"><a href="mailto:${email}" style="color: #06B6D4;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 8px 12px 0; color: #94A3B8; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: `"Bhagya Lakshmi" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 👋`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #F8FAFC; padding: 32px; border-radius: 12px;">
          <h2 style="color: #7C3AED;">Hi ${name}, thank you for your message!</h2>
          <p style="color: #94A3B8; line-height: 1.6;">
            I've received your message and will get back to you as soon as possible. 
            I usually respond within 24–48 hours.
          </p>
          <p style="color: #94A3B8; line-height: 1.6;">Here's a copy of what you sent:</p>
          <blockquote style="border-left: 3px solid #7C3AED; padding-left: 16px; color: #CBD5E1; margin: 16px 0;">
            ${message}
          </blockquote>
          <p style="color: #94A3B8; margin-top: 32px;">
            Warm regards,<br/>
            <strong style="color: #F8FAFC;">Bhagya Lakshmi</strong><br/>
            <a href="https://www.linkedin.com/in/perugu-bhagyalakshmi-674050342" style="color: #06B6D4;">LinkedIn</a> · 
            <a href="https://github.com/Bhagya-Lakshmi29" style="color: #06B6D4;">GitHub</a>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(autoReplyOptions);

    console.log(`✅ Contact email sent from ${email}`);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('❌ Error sending email:', err.message);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
};
