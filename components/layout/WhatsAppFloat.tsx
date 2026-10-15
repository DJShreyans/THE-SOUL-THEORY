"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const WhatsAppFloat: React.FC = () => {
  if (!siteConfig.features.enableWhatsappFloat) return null;

  const phone = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(
    "Hi SOUL THEORY, I'd like to ask a question about your functional nutrition formulas!"
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
      aria-label="Chat with SOUL THEORY Concierge on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-2">
        Chat with us
      </span>
    </a>
  );
};
