"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, CartCalculation } from "./commerce/types";
import { calculateCart, PROMO_CODES } from "./commerce/pricing";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  appliedPromo: string | null;
  isCod: boolean;
  
  // Actions
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setOpen: (open: boolean) => void;
  toggleCart: () => void;
  applyPromo: (code: string) => { success: boolean; message: string };
  removePromo: () => void;
  setIsCod: (isCod: boolean) => void;
  getCalculations: () => CartCalculation;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      appliedPromo: null,
      isCod: false,

      addItem: (newItem, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.id === newItem.id);
          let updatedItems: CartItem[];

          if (existingIndex > -1) {
            updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += quantity;
          } else {
            updatedItems = [...state.items, { ...newItem, quantity }];
          }

          return { items: updatedItems, isOpen: true };
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [], appliedPromo: null });
      },

      setOpen: (open) => {
        set({ isOpen: open });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      applyPromo: (code) => {
        const cleanCode = code.trim().toUpperCase();
        const promo = PROMO_CODES[cleanCode];

        if (!promo) {
          return { success: false, message: "Invalid promo code" };
        }

        const subtotal = get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        if (promo.minOrderValue && subtotal < promo.minOrderValue) {
          return {
            success: false,
            message: `Order must be at least ₹${promo.minOrderValue} to apply this code`,
          };
        }

        set({ appliedPromo: cleanCode });
        return { success: true, message: `Promo code ${cleanCode} applied!` };
      },

      removePromo: () => {
        set({ appliedPromo: null });
      },

      setIsCod: (isCod) => {
        set({ isCod });
      },

      getCalculations: () => {
        const { items, appliedPromo, isCod } = get();
        return calculateCart(items, appliedPromo, isCod);
      },
    }),
    {
      name: "soul-theory-cart-storage",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
      })),
      partialize: (state) => ({
        items: state.items,
        appliedPromo: state.appliedPromo,
      }),
    }
  )
);
