import React from 'react';
import ProductCard from '../ProductCard';

const bestSellers = [
  {
    id: 'best1',
    name: 'Robe d\'été fleurie',
    category: 'Vêtements',
    price: '49.99 €',
    description: 'Légère et élégante pour l\'été',
    imageSrc: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3'
  },
  {
    id: 'best2',
    name: 'Vase décoratif',
    category: 'Décoration',
    price: '29.99 €',
    description: 'Design moderne et épuré',
    imageSrc: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3'
  },
  {
    id: 'best3',
    name: 'Sac à main cuir',
    category: 'Accessoires',
    price: '89.99 €',
    description: 'Cuir véritable, finition premium',
    imageSrc: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3'
  }
];

export default function BestSellers() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Nos Best-sellers</h2>
          <a href="/products" className="text-purple-600 hover:text-purple-700 font-medium">
            Voir tout →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}