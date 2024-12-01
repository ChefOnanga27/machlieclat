import React from 'react';
import { Link } from 'react-router-dom';

const mainCategories = [
  {
    id: 'femme',
    name: 'Vêtements pour femme',
    image: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?ixlib=rb-4.0.3',
    description: 'Découvrez notre collection de prêt-à-porter féminin'
  },
  {
    id: 'deco',
    name: 'Décoration et mobilier',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3',
    description: 'Embellissez votre intérieur avec nos articles déco'
  },
  {
    id: 'accessoires',
    name: 'Mode accessoires',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3',
    description: 'Complétez votre style avec nos accessoires'
  },
  {
    id: 'maison',
    name: 'Linge de maison',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3',
    description: 'Qualité et confort pour votre maison'
  }
];

export default function MainCategories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Catégories</h2>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {mainCategories.map((category) => (
            <Link key={category.id} to={`/categories/${category.id}`} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-96 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}