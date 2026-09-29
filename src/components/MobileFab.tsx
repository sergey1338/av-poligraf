'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function MobileFab() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:hidden">
      <a
        href="https://wa.me/37379955020"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 hover:bg-green-600 active:scale-95 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href="tel:+37379955020"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40 hover:bg-orange-600 active:scale-95 transition"
        aria-label="Call"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}
