import { siteConfig } from "@/config/site";
import { CartItem, PromoCode, CartCalculation } from "./types";

export const PROMO_CODES: Record<string, PromoCode> = {
  WELCOME10: {
    code: "WELCOME10",
    discountPercent: 10,
    description: "10% off your first order",
  },
  SOUL20: {
    code: "SOUL20",
    discountPercent: 20,
    minOrderValue: 1499,
    description: "20% off orders above ₹1,499",
  },
  FLAT150: {
    code: "FLAT150",
    discountAmount: 150,
    minOrderValue: 999,
    description: "Flat ₹150 off on orders above ₹999",
  },
};

export function calculateCart(
  items: CartItem[],
  appliedPromo?: string | null,
  isCod: boolean = false
): CartCalculation {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discount = 0;
  if (appliedPromo) {
    const promo = PROMO_CODES[appliedPromo.toUpperCase()];
    if (promo) {
      const minRequired = promo.minOrderValue || 0;
      if (subtotal >= minRequired) {
        if (promo.discountPercent) {
          discount = Math.round((subtotal * promo.discountPercent) / 100);
        } else if (promo.discountAmount) {
          discount = Math.min(subtotal, promo.discountAmount);
        }
      }
    }
  }

  const freeThreshold = siteConfig.shipping.freeThreshold;
  const isFreeShipping = subtotal >= freeThreshold;
  const shipping = items.length === 0 ? 0 : isFreeShipping ? 0 : siteConfig.shipping.standardFee;
  const codFee = isCod && items.length > 0 ? siteConfig.shipping.codFee : 0;
  const amountNeededForFreeShipping = Math.max(0, freeThreshold - subtotal);
  const total = Math.max(0, subtotal - discount + shipping + codFee);

  return {
    subtotal,
    discount,
    shipping,
    codFee,
    total,
    freeShippingThreshold: freeThreshold,
    amountNeededForFreeShipping,
    isFreeShipping,
    itemCount,
  };
}

export function formatPrice(amount: number): string {
  return `${siteConfig.currency.symbol}${amount.toLocaleString("en-IN")}`;
}
