import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  honeypot: z.string().max(0, "Bot detected"), // Must be empty
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message || "Invalid submission" },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // TODO(client): Connect to Resend / Klaviyo / Mailchimp API in production
    console.log(`[Newsletter Subscription] New email subscriber: ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to SOUL THEORY! Welcome to the daily ritual.",
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
