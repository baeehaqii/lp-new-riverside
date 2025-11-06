"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
    id: number
    name: string
    location: string
    image: string
    rating: number
    text: string
}

export default function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Adelaia Putri",
            location: "",
            image: "https://res.cloudinary.com/dqobwse9q/image/upload/v1755435664/Screenshot_2025-08-17_at_19-59-13_Sapphire_Griya_Modern_Official_Perumahan_Tegal_Slawi_Brebes_sapphiregriyamodern_Instagram_photos_and_videos_t4hycn.png",
            rating: 5,
            text: "Lokasi yang sangat cocok untuk bangun rukost, pertama kali ceklok langsung cocok, sangat dekat dengan area kuliner.",
        },
        {
            id: 2,
            name: "Muhammad Imam",
            location: "",
            image: "https://res.cloudinary.com/dqobwse9q/image/upload/v1755435663/Screenshot_2025-08-17_at_20-00-42_Sapphire_Griya_Modern_Official_Perumahan_Tegal_Slawi_Brebes_sapphiregriyamodern_Instagram_photos_and_videos_ybu2pd.png",
            rating: 5,
            text: "Akses full ke tempat tempat populer di Purwokerto khususnya kampus untuk anak saya, mantap lokasinya dan fasilitasnya.",
        },
        
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="testimonials-title">Apa Kata Mereka</h2>
                </div>

                <div className="testimonials-grid">
                    <div>
                        <div className="testimonials-image-container">
                            <Image
                                src={currentTestimonial.image}
                                alt={`Testimoni dari ${currentTestimonial.name}`}
                                fill
                                className="object-cover testimonials-image"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="testimonials-text">{currentTestimonial.text}</p>
                        <div className="testimonials-stars">
                            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                <Star key={i} className="testimonials-star" />
                            ))}
                        </div>
                        <div>
                            <h3 className="testimonials-name">{currentTestimonial.name}</h3>
                            <p className="testimonials-location">{currentTestimonial.location}</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-controls">
                    <button
                        onClick={handlePrev}
                        className="testimonials-btn"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="testimonials-btn testimonials-btn-primary"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
