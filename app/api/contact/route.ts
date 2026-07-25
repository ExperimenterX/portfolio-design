import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required fields." },
        { status: 400 }
      );
    }

    // In a real production environment, this route would integrate with SendGrid, Resend, or AWS SES.
    // For this portfolio, we simulate immediate successful message dispatch and return confirmation.
    console.log("New contact form message received:", { name, email, subject, message, timestamp: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: `Thank you ${name || "there"}! Your message has been dispatched to Shankar Bhavani. He will respond to ${email} shortly.`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process message submission. Please try emailing directly at shankar.bhavani.in@gmail.com" },
      { status: 500 }
    );
  }
}
