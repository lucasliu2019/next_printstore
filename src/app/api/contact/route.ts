import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, phone, cart, formType } = body;

    if (!email) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Format cart items only if formType is "quoteRequest"
    let cartText = "Cart is empty.";
    if (formType === "quoteRequest" && Array.isArray(cart) && cart.length > 0) {
      cartText = cart.map((item) => {
        return `- ${item.name} (x${item.quantity}) - $${item.price} - Description: ${item.description}`;
      }).join("\n");

      cartText += `\nData: ${new Date().toLocaleString()}`;
    }

    // Adjust subject line based on the form type
    const subjectLine =
      formType === "quoteRequest"
        ? `New Quote Request from ${name}`
        : `New Contact Form Message from ${name}`;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: subjectLine,  // Dynamic subject based on formType
      text: `You have a new message!\n
👤 Name: ${name}
📩 Email: ${email}
📞 Phone: ${phone || "Not provided"}
💬 Message: ${message}

${formType === "quoteRequest" ? "\n--- Cart Details ---\n" + cartText : ""}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
