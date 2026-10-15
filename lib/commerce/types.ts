import { Product, PackSize } from "@/data/products";

export interface CartItem {
  id: string; // unique item id: `${productSlug}-${packSizeId}`
  productSlug: string;
  productName: string;
  line: string;
  flavour: string;
  packSizeId: string;
  packSizeLabel: string;
  price: number;
  compareAtPrice: number;
  netWeightG: number;
  image: string;
  quantity: number;
}

export interface PromoCode {
  code: string;
  discountPercent?: number;
  discountAmount?: number;
  minOrderValue?: number;
  description: string;
}

export interface CartCalculation {
  subtotal: number;
  discount: number;
  shipping: number;
  codFee: number;
  total: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  isFreeShipping: boolean;
  itemCount: number;
}
