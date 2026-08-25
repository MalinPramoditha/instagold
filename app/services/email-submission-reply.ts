'use server'
import nodemailer, { SentMessageInfo } from 'nodemailer';

export async function sendReply(data: {
    email: string;
}): Promise<{ success: boolean; error?: string }> {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: data.email,
            subject: "Thank You | InstaGold Buyers",
            html: `<body style="margin: 0; padding: 0; background-color: #f3ece0; font-family: Arial, sans-serif; color: #1d1a15; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <!-- Outer Email Container Table -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f3ece0; table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 40px 10px;">
        
        <!-- Main Email Card Table -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #ded2bd; border-radius: 18px; overflow: hidden; text-align: center;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="background: #fffdf9; border-bottom: 1px solid #ded2bd; padding: 36px 40px 28px;">
              <img src="https://instagoldbuyers.com/logo.png" alt="InstaGold Buyers" width="230" style="display: block; width: 230px; max-width: 70%; height: auto; margin: 0 auto;" />
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td align="center" style="padding: 44px 44px 20px;">
              
              <!-- Checkmark / Icon Wrapper -->
              <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto 24px;">
                <tr>
                  <td align="center" width="74" height="74" style="background-color: #a8802f; border-radius: 50%; text-align: center; vertical-align: middle;">
                    <span style="color: #fffdf7; font-size: 32px; font-weight: bold; line-height: 74px;">&#10003;</span>
                  </td>
                </tr>
              </table>

              <!-- Heading -->
              <h1 style="font-family: Georgia, serif; font-weight: 600; font-size: 30px; color: #1d1a15; margin: 0 0 14px 0; letter-spacing: 0.3px;">
                Thank you, we've got it
              </h1>

              <!-- Lead Text -->
              <p style="font-size: 16px; color: #6e6151; line-height: 1.6; margin: 0 auto 30px auto; max-width: 440px;">
                Your request has reached our specialists at InstaGold. We will review what you are looking to sell and get back to you shortly with a fair, no-obligation offer.
              </p>

              <!-- Divider -->
              <table border="0" cellpadding="0" cellspacing="0" width="70" style="margin: 30px auto;">
                <tr>
                  <td style="height: 2px; background-color: #c9a24b; opacity: 0.7;"></td>
                </tr>
              </table>

              <!-- Contact Info -->
              <div style="font-size: 15px; color: #1d1a15; line-height: 1.9; margin-bottom: 30px;">
                <span style="color: #9a8a74; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; display: block; margin-bottom: 6px;">Prefer to talk now?</span>
                Call <a href="tel:+12129015705" style="color: #a8802f; text-decoration: none; font-weight: 500;">(212) 901-5705</a><br />
                Monday to Friday, 9am to 5pm<br />
                31 W 47th Street, Suite 202, Diamond District, NYC
              </div>

              <!-- Button -->
              <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td align="center" style="background-color: #c9a24b; border-radius: 10px;">
                    <a href="https://instagoldbuyers.com" target="_blank" style="display: inline-block; padding: 15px 40px; font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #fffdf7; text-decoration: none;">
                      Back to Home
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="margin-top: 24px; padding: 22px 40px 30px; border-top: 1px solid #ded2bd; background-color: #fbf8f2; font-size: 12px; color: #9a8a74; letter-spacing: 0.4px;">
              InstaGold Buyers Refinery &nbsp;&middot;&nbsp; Licensed NYC Buyer &nbsp;&middot;&nbsp; Since 1993
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
            `,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent:", info.messageId);

        return { success: true };
    } catch (error: any) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
}
