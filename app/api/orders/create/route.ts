import { NextResponse } from "next/server";
import { z } from "zod";
import { calculateCart } from "@/lib/commerce/pricing";
import { CartItem } from "@/lib/commerce/types";

const orderSchema = z.object({
  customer: z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Valid email required"),
    phone: z.string().min(10, "10-digit Indian mobile number required"),
  }),
  shippingAddress: z.object({
    addressLine1: z.string().min(5, "Flat/House & Building name required"),
    addressLine2: z.string().optional(),
    landmark: z.string().optional(),
    city: z.string().min(2, "City required"),
    state: z.string().min(2, "State required"),
    pincode: z.string().regex(/^[1-9][0-9]{5}$/, "Valid 6-digit Indian PIN code required"),
  }),
  items: z.array(
    z.object({
      id: z.string(),
      productSlug: z.string(),
      productName: z.string(),
      line: z.string(),
      flavour: z.string(),
      packSizeId: z.string(),
      packSizeLabel: z.string(),
      price: z.number(),
      compareAtPrice: z.number(),
      netWeightG: z.number(),
      image: z.string(),
      quantity: z.number().min(1),
    })
  ),
  appliedPromo: z.string().nullable().optional(),
  paymentMethod: z.enum(["razorpay", "cod"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = orderSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message || "Invalid order payload" },
        { status: 400 }
      );
    }

    const { customer, shippingAddress, items, appliedPromo, paymentMethod } = result.data;

    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const isCod = paymentMethod === "cod";
    const calculations = calculateCart(items as CartItem[], appliedPromo, isCod);

    // Generate unique order reference (e.g. ST-202610-8941)
    const orderNumber = `ST-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;

    const orderData = {
      orderNumber,
      customer,
      shippingAddress,
      items,
      calculations,
      paymentMethod,
      paymentStatus: isCod ? "pending_cod" : "paid_test",
      createdAt: new Date().toISOString(),
    };

    console.log(`[Order Created] Order #${orderNumber} for ${customer.fullName} - Total: ₹${calculations.total}`);

    return NextResponse.json(
      {
        success: true,
        orderNumber,
        total: calculations.total,
        orderData,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create order. Please try again." },
      { status: 500 }
    );
  }
}
