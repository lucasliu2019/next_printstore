import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

  // console.log("EMAIL_USER:", process.env.EMAIL_USER);
  // console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");
  // console.log("EMAIL_TO:", process.env.EMAIL_TO);

  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider (e.g., Gmail, Outlook)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_TO, // Your personal email
      subject: `New Contact Form Submission from ${name}`,
      text: `Hi,\nEmail: ${email}\nMessage: ${message}\nName: ${name}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}