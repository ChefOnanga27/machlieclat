import React from 'react';

const sortOptions = [
  { name: 'Plus récents', value: 'newest' },
  { name: 'Prix croissant', value: 'price-asc' },
  { name: 'Prix décroissant', value: 'price-desc' },
  { name: 'Meilleures ventes', value: 'best-selling' },
];

export default function SortFilter({ sortBy, setSortBy }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="text-sm font-medium text-gray-900">Trier par</h3>
      <div className="mt-4 space-y-2">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSortBy(option.value)}
            className={`w-full text-left py-2 px-3 rounded-md ${
              sortBy === option.value ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}