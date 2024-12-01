import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Maureen Letekou',
    role: 'Cliente fidèle',
    content: 'Des produits de qualité exceptionnelle. Le service client est vraiment à l\'écoute et réactif.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3'
  },
  {
    id: 2,
    name: 'Vilia IBINDA',
    role: 'Blogueuse beauté',
    content: 'Je recommande vivement leurs produits de soin. Les résultats sont visibles dès les premières utilisations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
  },
  {
    id: 3,
    name: 'Betty Enkoro',
    role: 'Cliente régulière',
    content: 'Un rapport qualité-prix imbattable et une livraison ultra rapide. Je suis conquise !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ce que nos clients disent</h2>
          <p className="mt-4 text-lg text-gray-600">Découvrez les avis de nos clients satisfaits</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}