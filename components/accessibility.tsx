import { School, Hospital, TreePine, ShoppingBag, Train, Bus } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "7 menit dari RST Wijaya Kusuma",
        "9 menit dari RS Santa Elisabeth",
        "12 menit dari PMI",
        "12 menit dari RSUD Margono Soekarjo Unit Geriatri Paviliun Abiyasa",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "3 menit dari FIB Universitas Jenderal Soedirman",
        "2 menit dari SD Negeri Grendeng 02",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "1 menit dari minimarket",
        "4 menit dari Toserba Bursa Kampus",
        "4 menit dari Alfamidi Super",
        "13 menit dari Rita Pasaraya Kebon Dalem",
        "14 menit dari Rita Supermall",
      ],
    },
    {
      icon: <Train />,
      title: "Fasilitas Umum",
      items: [
        "13 menit dari Stasiun Purwokerto",
        "15 menit dari Terminal Bulupitu",
      ],
    },
  ]
  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
