import React from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

export default function FilterBar({ setIsOpen, resultsCount }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
      <div>
        <p className="text-sm text-gray-500">{resultsCount} résultats</p>
      </div>
      <button
        type="button"
        className="inline-flex items-center lg:hidden rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => setIsOpen(true)}
      >
        <FunnelIcon className="h-5 w-5 mr-2" />
        Filtres
      </button>
    </div>
  );
}