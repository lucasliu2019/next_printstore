import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, phone, cart } = body;

    if (!email ) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Format cart items
    let cartText = "Cart is empty.";
    if (Array.isArray(cart) && cart.length > 0) {
      cartText = cart.map((item) => {
        const itemTotal = item.quantity * item.price;
        return `- ${item.name} (x${item.quantity}) - $${item.price} each = $${itemTotal}`;
      }).join("\n");
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      cartText += `\n\nCart Total: $${total}`;
    }

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
      subject: `New Quote Request from ${name}`,
      text: `You have a new message!\n
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Message: ${message}

--- Cart Details ---
${cartText}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
