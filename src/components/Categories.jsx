import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Soins Visage',
    description: 'Crèmes, sérums et masques pour le visage',
    imageSrc: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3',
    href: '/categories/soins-visage'
  },
  {
    id: 2,
    name: 'Soins Corps',
    description: 'Lotions et huiles corporelles',
    imageSrc: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3',
    href: '/categories/soins-corps'
  },
  {
    id: 3,
    name: 'Maquillage',
    description: 'Produits de beauté et cosmétiques',
    imageSrc: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3',
    href: '/categories/maquillage'
  },
  {
    id: 4,
    name: 'Parfums',
    description: 'Fragrances pour homme et femme',
    imageSrc: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3',
    href: '/categories/parfums'
  }
];

export default function Categories() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-gray-900">Nos Catégories</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {categories.map((category) => (
              <div key={category.id} className="group relative mt-6">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={category.imageSrc}
                    alt={category.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  <Link to={category.href}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </Link>
                </h3>
                <p className="text-base text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}