import React from 'react';
import { categories } from '../utils/productUtils';
import { FaTshirt, FaShoePrints, FaHome, FaSprayCan } from 'react-icons/fa';

const categoryIcons = {
  'Vêtements Femmes': FaTshirt,
  'Chaussures Femmes': FaShoePrints,
  'Habillement Maison': FaHome,
  'Parfums': FaSprayCan
};

export default function CategoryMenu({ onCategorySelect, selectedCategory }) {
  return (
    <div className="py-8">
      <div className="flex flex-nowrap overflow-x-auto gap-4 max-w-7xl mx-auto px-4 pb-4">
        <button
          onClick={() => onCategorySelect('all')}
          className={`px-6 py-4 rounded-lg text-sm font-medium transition-all transform hover:scale-105 whitespace-nowrap
            ${selectedCategory === 'all'
              ? 'bg-amber-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-800 hover:bg-amber-100'
            }`}
        >
          Tous les produits
        </button>

        {categories.map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`px-6 py-4 rounded-lg text-sm font-medium transition-all transform hover:scale-105
                flex flex-row items-center space-x-2 whitespace-nowrap
                ${selectedCategory === category
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-800 hover:bg-amber-100'
                }`}
            >
              <Icon className="text-xl" />
              <span>{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}