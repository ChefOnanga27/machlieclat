import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Crème Hydratante',
    category: 'Soins',
    price: '29.99 €',
    imageSrc: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3'
  },
  {
    id: 2,
    name: 'Sérum Visage',
    category: 'Soins',
    price: '39.99 €',
    imageSrc: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?ixlib=rb-4.0.3'
  },
  {
    id: 3,
    name: 'Masque Purifiant',
    category: 'Soins',
    price: '24.99 €',
    imageSrc: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nos produits vedettes</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}