import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  orderNumber: z.string().optional(),
  topic: z.enum(["general", "orders", "formulation", "partnerships", "wholesale"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message || "Invalid submission" },
        { status: 400 }
      );
    }

    const data = result.data;

    // TODO(client): Connect to customer support ticketing system (Zendesk / Freshdesk) or Resend email
    console.log(`[Contact Submission] Topic: ${data.topic} from ${data.email} (${data.name})`);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received! Our concierge team will reply within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
