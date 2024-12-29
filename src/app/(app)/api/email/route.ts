import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

  const data = await req.json();
  const { name, email, subject, text } = data;

  const msg = {
    to: "info@eypcyprus.com",
    from: "info@eypcyprus.com",
    subject: `Contact Form - ${subject}`,
    html: `<h2>You have a new contact form submission:</h2><p><strong>Name: </strong>${name}</p><p><strong>Email: </strong>${email}</p><p><strong>Subject: </strong>${subject}</p><p><strong>Message: </strong>${text}</p><div>This message was sent from <a href='https://eypcyprus.com/get-involved'>https://eypcyprus.com/get-involved</a></div>`,
  };

  try {
    await sendgrid.send(msg);
    return NextResponse.json({
      status: 202,
      data: "Message have been accepted for delivery.",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      data: "Something went wrong while delivering the message. Please try again later.",
    });
  }
}
