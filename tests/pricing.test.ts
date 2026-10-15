import { describe, it, expect } from "vitest";
import { calculateCart } from "@/lib/commerce/pricing";
import { CartItem } from "@/lib/commerce/types";

describe("Cart and Pricing Logic", () => {
  const dummyItem1: CartItem = {
    id: "creatine-blueberry-cloud-tin-250g",
    productSlug: "creatine-blueberry-cloud",
    productName: "Creatine Monohydrate — Blueberry Cloud",
    line: "Creatine Monohydrate",
    flavour: "Blueberry Cloud",
    packSizeId: "tin-250g",
    packSizeLabel: "250g Jar",
    price: 1199,
    compareAtPrice: 1499,
    netWeightG: 250,
    image: "/images/products/creatine-blueberry-cloud.jpg",
    quantity: 1,
  };

  const dummyItem2: CartItem = {
    id: "hydration-watermelon-lime-sachet-15pk",
    productSlug: "hydration-watermelon-lime",
    productName: "Hydration + Multivitamin — Watermelon Lime",
    line: "Hydration + Multivitamin Combo",
    flavour: "Watermelon Lime",
    packSizeId: "sachet-15pk",
    packSizeLabel: "On-the-Go Pack",
    price: 649,
    compareAtPrice: 799,
    netWeightG: 150,
    image: "/images/products/hydration-watermelon-lime.jpg",
    quantity: 1,
  };

  it("calculates empty cart correctly", () => {
    const calc = calculateCart([]);
    expect(calc.subtotal).toBe(0);
    expect(calc.shipping).toBe(0);
    expect(calc.discount).toBe(0);
    expect(calc.total).toBe(0);
    expect(calc.itemCount).toBe(0);
  });

  it("adds standard shipping fee when under free shipping threshold (₹999)", () => {
    const calc = calculateCart([dummyItem2]); // price ₹649 < ₹999
    expect(calc.subtotal).toBe(649);
    expect(calc.shipping).toBe(80);
    expect(calc.isFreeShipping).toBe(false);
    expect(calc.amountNeededForFreeShipping).toBe(350);
    expect(calc.total).toBe(729);
  });

  it("awards free shipping when order value reaches or exceeds ₹999", () => {
    const calc = calculateCart([dummyItem1]); // price ₹1199 >= ₹999
    expect(calc.subtotal).toBe(1199);
    expect(calc.shipping).toBe(0);
    expect(calc.isFreeShipping).toBe(true);
    expect(calc.amountNeededForFreeShipping).toBe(0);
    expect(calc.total).toBe(1199);
  });

  it("applies 10% discount with WELCOME10", () => {
    const calc = calculateCart([dummyItem1], "WELCOME10");
    expect(calc.subtotal).toBe(1199);
    expect(calc.discount).toBe(120); // 10% of 1199 rounded
    expect(calc.total).toBe(1199 - 120);
  });

  it("handles SOUL20 minimum order value requirement", () => {
    // Under minimum ₹1499
    const calcUnder = calculateCart([dummyItem1], "SOUL20");
    expect(calcUnder.discount).toBe(0);

    // Over minimum ₹1499
    const calcOver = calculateCart([dummyItem1, dummyItem2], "SOUL20"); // 1199 + 649 = 1848
    expect(calcOver.subtotal).toBe(1848);
    expect(calcOver.discount).toBe(Math.round(1848 * 0.2)); // 370
    expect(calcOver.total).toBe(1848 - 370);
  });

  it("applies COD fee when COD is selected", () => {
    const calc = calculateCart([dummyItem1], null, true);
    expect(calc.codFee).toBe(50);
    expect(calc.total).toBe(1199 + 50);
  });
});
