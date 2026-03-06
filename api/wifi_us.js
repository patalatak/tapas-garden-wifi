// api/wifi.js
// Vercel Serverless Function for Tapas Garden WiFi (English)
// This function handles form submissions and sends email notifications

const nodemailer = require('nodemailer');

export default async (req, res) => {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, mac_address, client_ip, session_id } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Configure email service (using Gmail or your email provider)
    // IMPORTANT: Set environment variables in Vercel:
    // - EMAIL_USER: your email (contact@tapasgarden.com)
    // - EMAIL_PASSWORD: your app password (get from Gmail settings)
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to you (admin)
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New WiFi Request - ${email}`,
      text: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              NEW WiFi REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email:        ${email}
Name:         ${name || 'Not provided'}
MAC Address:  ${mac_address || 'N/A'}
Client IP:    ${client_ip || 'N/A'}
Session ID:   ${session_id || 'N/A'}
Date/Time:    ${new Date().toISOString()}
Source IP:    ${req.headers['x-forwarded-for'] || req.ip}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTIONS TO TAKE:

1. Go to Omada Cloud
2. Generate a voucher "Tapas_1h" (1 hour)
3. Reply to this email with the code

Email template to send back:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hello ${name || 'Guest'},

Thank you for registering for WiFi! 🍽️

Here's your code for 1 hour of free WiFi:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    [CODE TO GENERATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

How to use:
1. Connect to "Tapas_Garden_Free"
2. Open a browser
3. The login page will appear
4. Enter the code above
5. Enjoy! 🎉

See you soon! 🌶️

— Tapas Garden Team
contact@tapasgarden.com
+66 83 847 8500

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
    };

    // Email to customer
    const customerEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Tapas Garden WiFi Code',
      text: `Hello ${name || 'Guest'},

Thank you for registering for free WiFi at Tapas Garden! 🍽️

Your WiFi code will be sent to you shortly.

In the meantime:
1. Connect to the WiFi network "Tapas_Garden_Free"
2. Open a browser
3. A login page will appear
4. Enter your code when prompted
5. Enjoy 1 hour of free internet!

If you don't receive your code within 5 minutes, please contact us at:
contact@tapasgarden.com or +66 83 847 8500

See you soon! 🌶️

— Tapas Garden Team
Koh Samui, Thailand
`,
    };

    // Send both emails
    await transporter.sendMail(adminEmail);
    await transporter.sendMail(customerEmail);

    // Return success
    return res.status(200).json({
      success: true,
      message: 'WiFi request submitted successfully',
      email: email,
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to process request',
      details: error.message,
    });
  }
};
