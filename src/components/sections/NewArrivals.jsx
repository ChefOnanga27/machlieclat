import React from 'react';
import ProductCard from '../ProductCard';

const newProducts = [
  {
    id: 'new1',
    name: 'Coussin décoratif',
    category: 'Maison',
    price: '34.99 €',
    description: 'Motifs géométriques tendance',
    imageSrc: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3'
  },
  {
    id: 'new2',
    name: 'Chemisier soie',
    category: 'Vêtements',
    price: '59.99 €',
    description: 'Élégant et confortable',
    imageSrc: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3'
  },
  {
    id: 'new3',
    name: 'Miroir mural',
    category: 'Décoration',
    price: '79.99 €',
    description: 'Design contemporain',
    imageSrc: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3'
  }
];

export default function NewArrivals() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nouveautés</h2>
            <p className="mt-2 text-gray-600">Découvrez nos derniers arrivages</p>
          </div>
          <a href="/products" className="text-purple-600 hover:text-purple-700 font-medium">
            Voir tout →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}