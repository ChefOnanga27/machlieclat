import React from 'react';
import { TagIcon, SparklesIcon } from '@heroicons/react/24/outline';

const offers = [
  {
    id: 1,
    title: 'Soldes de noel',
    description: '-10% sur toute la collection été',
    code: 'ETE2024',
    icon: SparklesIcon,
    bgColor: 'bg-purple-600'
  },
  {
    id: 2,
    title: 'Offre exclusive',
    description: '-15% sur la collection maison',
    code: 'MAISON15',
    icon: TagIcon,
    bgColor: 'bg-pink-600'
  }
];

export default function SpecialOffers() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.bgColor} rounded-lg px-6 py-8 text-white shadow-lg`}
            >
              <div className="flex items-center">
                <offer.icon className="h-8 w-8" />
                <h3 className="ml-4 text-2xl font-bold">{offer.title}</h3>
              </div>
              <p className="mt-4 text-lg">{offer.description}</p>
              <div className="mt-6">
                <p className="text-sm">Utilisez le code :</p>
                <div className="mt-2 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900">
                  {offer.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}