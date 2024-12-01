import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import RatingFilter from './RatingFilter';
import SortFilter from './SortFilter';

export default function FilterSidebar({
  isOpen,
  setIsOpen,
  filters,
  setFilters
}) {
  return (
    <div className={`fixed inset-0 z-40 lg:hidden ${isOpen ? '' : 'hidden'}`}>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsOpen(false)} />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="relative w-96 transform bg-white shadow-xl transition-transform duration-300">
          <div className="flex items-center justify-between px-4 py-6">
            <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 pb-6">
            <SortFilter
              sortBy={filters.sortBy}
              setSortBy={(value) => setFilters({ ...filters, sortBy: value })}
            />
            <PriceFilter
              priceRange={filters.priceRange}
              setPriceRange={(value) => setFilters({ ...filters, priceRange: value })}
            />
            <ColorFilter
              selectedColors={filters.colors}
              setSelectedColors={(value) => setFilters({ ...filters, colors: value })}
            />
            <RatingFilter
              minRating={filters.minRating}
              setMinRating={(value) => setFilters({ ...filters, minRating: value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}