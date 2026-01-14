"use client"

import Image from "next/image"
import { useState } from "react" 
import { X } from "lucide-react" 

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="/hero/hero1.avif"
                alt="Sapphire Riverside"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Riverside</h2>
              <p className="about-description">
                Berada di kawasan strategis Purwokerto Utara, Sapphire Riverside dirancang sebagai perumahan Purwokerto yang menawarkan kenyamanan modern sekaligus potensi investasi jangka panjang. Berlokasi di Jl. Gn. Slamet, Pabuaran, Purwokerto Utara, Banyumas, kawasan ini dikelilingi pusat pendidikan, bisnis, dan gaya hidup perkotaan, hanya 3 menit dari Universitas Jenderal Soedirman. Kombinasi antara hunian dan rukost menjadikan Sapphire Riverside pilihan ideal bagi keluarga dan investor yang menginginkan keseimbangan antara tempat tinggal nyaman dan aset produktif yang terus bernilai.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">9</div>
              <div className="about-stat-label">Lokasi Terbaik di Jawa Bagian Selatan</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">10.000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">9</div>
              <div className="about-stat-label">Proyek Unggulan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Riverside</h2>
              <div className="modal-image">
                <Image
                  src="/gallery/gallery1.avif"
                  alt="Sapphire Riverside"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di kawasan strategis Purwokerto Utara, Sapphire Riverside dirancang sebagai perumahan Purwokerto yang menawarkan kenyamanan modern sekaligus potensi investasi jangka panjang. Berlokasi di Jl. Gn. Slamet, Pabuaran, Purwokerto Utara, Banyumas, kawasan ini dikelilingi pusat pendidikan, bisnis, dan gaya hidup perkotaan, hanya 3 menit dari Universitas Jenderal Soedirman. Kombinasi antara hunian dan rukost menjadikan Sapphire Riverside pilihan ideal bagi keluarga dan investor yang menginginkan keseimbangan antara tempat tinggal nyaman dan aset produktif yang terus bernilai.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>7 menit ke fasilitas kesehatan</li>
                  <li>3 menit ke fasilitas pendidikan</li>
                  <li>1 menit ke fasilitas perbelanjaan</li>
                  <li>Dekat pusat kota Purwokerto</li>
                  <li>Akses cepat ke jalan utama</li>
                  <li>Lingkungan sudah berkembang dan rami</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti, CCTV, dan sistem one gate</li>
                  <li>Akses jalan lebar untuk mobilitas nyaman dan aman</li>
                  <li>Dekat jalan utama Jl. Gunung Slamet, memudahkan akses transportasi umum maupun pribadi</li>
                  <li>Ruang terbuka hijau dengan pemandangan alam Purwokerto dan panorama Gunung Slamet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
