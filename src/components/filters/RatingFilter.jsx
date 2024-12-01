import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

export default function RatingFilter({ minRating, setMinRating }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="text-sm font-medium text-gray-900">Évaluation minimum</h3>
      <div className="mt-4 space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() => setMinRating(rating)}
            className={`flex items-center w-full py-2 px-3 rounded-md ${
              minRating === rating ? 'bg-purple-50' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex">
              {[...Array(rating)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-gray-200" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">et plus</span>
          </button>
        ))}
      </div>
    </div>
  );
}