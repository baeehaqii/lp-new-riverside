"use client"

import { WhatsAppIcon } from "./icons"

declare global {
  interface Window {
    fbq?: (track: string, event: string, params?: object) => void;
  }
}

export default function WhatsAppFloat() {
  const handleClick = () => {
    const nomorWhatsApp = "6281127010001";
    const pesan = "Halo, saya tertarik dengan properti Sapphire Riverside Purwokerto";

    // Track Facebook Pixel AddToCart event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'WhatsApp Float Button',
        content_category: 'Property Interest',
        content_type: 'product',
        value: 1,
        currency: 'IDR'
      });
    }

    window.open(`https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`, "_blank");
  }

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <div className="whatsapp-button">
        <WhatsAppIcon size={28} className="whatsapp-icon" />
      </div>
    </div>
  )
}
