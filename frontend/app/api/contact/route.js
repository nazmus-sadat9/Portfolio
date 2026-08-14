import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All inputs are required" },
        { status: 400 }
      );
    }

    const emailEngine = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTHOR_GMAIL,
        pass: process.env.AUTHOR_PASS,
      },
    });

    const authormail = {
      from: process.env.AUTHOR_GMAIL,
      to: process.env.AUTHOR_GMAIL,
      subject: "PORTFOLIO MAIL",
      html: `<h2>${name}:</h2><br><p>${message}</p>`,
    };

    const usermail = {
      from: process.env.AUTHOR_GMAIL,
      to: email,
      subject: "WELCOME",
      html: `
        <div style="font-family: sans-serif; padding: 1rem; background-color: #121212; color: #ffffff;">
          <h2>Welcome ${name},</h2><br> 
          <p style="line-height: 1.6; font-weight: 300;">
            Thank you so much for exploring my portfolio. If you have any opinion about my website you can tell me.
          </p> 
          <br><br><br> 
          <p style="text-align: center; border-top: 1px solid #ffffff; padding: 1rem 0; font-weight: 200;">
            &copy; ${new Date().getFullYear()} SADAT. All rights reserved
          </p>
        </div>
      `,
    };

    // Send the emails
    await Promise.all([
      emailEngine.sendMail(usermail),
      emailEngine.sendMail(authormail),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Nodemailer Error:", err);
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}
