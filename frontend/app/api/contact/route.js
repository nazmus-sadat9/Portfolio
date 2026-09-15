import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.AUTHOR_GMAIL,
        pass: process.env.AUTHOR_PASS, 
      },
    });

    
    await transporter.sendMail({
      from: process.env.AUTHOR_GMAIL,
      to: email, 
      subject: `Welcome ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Thank You for Reaching Out</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; color: #ffffdb;">
  
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #121212; width: 100%; padding: 40px 10px;">
              <tr>
                <td align="center">
        
                <!-- Email Container -->
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
          
                <!-- Header Accent Bar -->
              <tr>
                <td height="4" style="background-color: #ffffdb;"></td>
              </tr>

              <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Welcome Heading -->
              <h1 style="margin: 0 0 20px 0; font-size: 26px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                Welcome, ${name}!
              </h1>

              <!-- Message Body -->
              <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #ffffdb; opacity: 0.9;">
                Thank you for reaching out and sending me a message. I’ve received your note and will get back to you as soon as possible.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #ffffdb; opacity: 0.9;">
                In the meantime, if you have any feedback regarding my portfolio, ideas for collaboration, or anything else on your mind, I’d love to hear it—feel free to reply directly to this email anytime.
              </p>

            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 30px;">
              <hr style="border: none; border-top: 1px solid #2a2a2a; margin: 0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 30px 30px 30px; text-align: center;">
              <p style="margin: 0; font-size: 13px; color: #ffffdb; opacity: 0.6; letter-spacing: 0.3px;">
                &copy; 2026 SADAT. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`,
    });

    await transporter.sendMail({
      from: process.env.AUTHOR_GMAIL,
      to: process.env.AUTHOR_GMAIL,
      subject: "Portfolio Mail", 
      text: `${name}\n${message}`,
    });


    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
