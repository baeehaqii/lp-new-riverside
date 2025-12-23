"use client"

import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

const nomorWhatsApp = "6281127010001";
const pesan = "Halo kak, saya dapat informasi dari Facebook, boleh minta tolong informasi selengkapnya tentang perumahan Sapphire Riverside Purwokerto";
const linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

declare global {
  interface Window {
    fbq?: (track: string, event: string, params?: object) => void;
  }
}

export default function CallToAction() {
  const handleWhatsAppClick = () => {
    // Track Facebook Pixel AddToCart event for WhatsApp button
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'WhatsApp Kami - CTA Section',
        content_category: 'Property Interest',
        content_type: 'product',
        value: 1,
        currency: 'IDR'
      });
    }
  };

  const handlePromoClick = () => {
    // Track Facebook Pixel AddToCart event for Promo button
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'Dapatkan Promo - CTA Section',
        content_category: 'Property Promotion',
        content_type: 'product',
        value: 1,
        currency: 'IDR'
      });
    }
  };

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Sudah Siap Hidup Nyaman Sekaligus Jadi #JuraganKos?</h2>
          <p className="cta-description">
            Mulai perjalanan Anda menata masa depan bersama Sapphire Riverside sekarang juga!
          </p>

          <div className="cta-buttons">
            <Link
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-primary"
              onClick={handleWhatsAppClick}
            >
              <Phone className="cta-button-icon" />
              Whatsapp Kami
            </Link>
            <Link
              //border cta
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-outline"
              onClick={handlePromoClick}
            >
              <Percent className="cta-button-icon" />
              Dapatkan Promo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}