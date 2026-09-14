import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use host/port for custom SMTP
      auth: {
        user: "mugdho702@gmail.com",
        pass: "uxjtanzfabchkgvt", // App password for Gmail
      },
    });

    // Send email with just the name as body content
    await transporter.sendMail({
      from: "mugdho702@gmail.com",
      to: "prosadat505@gmail.com", // Sending to yourself
      subject: "New Name Submission",
      text: `${name}\n${email}\n${message}`, // Just the name, nothing more
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
