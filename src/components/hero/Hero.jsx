import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  {
    url: '/couverture.jpg',
    title: 'Découvrez notre collection',
    subtitle: 'Des produits de beauté haut de gamme'
  },
  {
    url: '/logo.jpg',
    title: 'Style varié',
    subtitle: 'Pour une beauté rayonnante'
  },
  {
    url: '/rideaux2.jpg',
    title: 'Nouveautés',
    subtitle: 'Découvrez nos derniers produits'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] overflow-hidden">
      {/* Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay sombre */}
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Contenu */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 transition-all duration-500 transform">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {heroImages[currentSlide].subtitle}
          </p>
          <Link
            to="/products"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors"
          >
            Découvrir nos produits
          </Link>
        </div>
      </div>

      {/* Points de navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-amber-500 w-4' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}