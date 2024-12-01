import React from 'react';

export default function PriceFilter({ priceRange, setPriceRange }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="text-sm font-medium text-gray-900">Prix</h3>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="text-sm text-gray-500">
          Jusqu'à {priceRange}€
        </div>
      </div>
    </div>
  );
}