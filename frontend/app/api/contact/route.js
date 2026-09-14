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
      subject: "New Name Submission",
      text: `${name}\n${email}\n${message}`,
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
