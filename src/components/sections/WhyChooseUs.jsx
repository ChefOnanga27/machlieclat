import React from 'react';
import { 
  SparklesIcon, 
  TruckIcon, 
  ChatBubbleBottomCenterTextIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Produits de qualité',
    description: 'Sélection rigoureuse des meilleurs produits pour votre satisfaction.',
    icon: SparklesIcon
  },
  {
    name: 'Livraison rapide',
    description: 'Livraison en 24/48h pour toute commande passée avant 15h.',
    icon: TruckIcon
  },
  {
    name: 'Service client réactif',
    description: 'Une équipe à votre écoute 7j/7 pour répondre à vos questions.',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    name: 'Paiement sécurisé',
    description: 'Vos transactions sont 100% sécurisées avec notre système de paiement.',
    icon: ShieldCheckIcon
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Des avantages exclusifs pour une expérience shopping unique
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-600 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}