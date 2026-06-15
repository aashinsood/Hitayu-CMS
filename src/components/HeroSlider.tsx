'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

interface Slide {
  url: string
  alt: string
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (slides.length <= 1 || isHovered) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [slides.length, isHovered, next])

  if (!slides.length) {
    return (
      <div className="ht-slider ht-slider--empty">
        <div className="ht-slider-ph">
          <i className="fas fa-images" />
          <span>Add slides from Admin → Hero Slides</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="ht-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, i) => (
        <div key={i} className={`ht-slide${i === current ? ' active' : ''}`}>
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Bottom gradient overlay */}
      <div className="ht-slide-overlay" />

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="ht-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`ht-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
