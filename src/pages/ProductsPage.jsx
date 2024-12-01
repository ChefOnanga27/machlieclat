import React, { useState } from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/filters/FilterSidebar';
import FilterBar from '../components/filters/FilterBar';
import { getAllProducts } from '../utils/productUtils';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: 'newest',
    priceRange: 200,
    colors: [],
    minRating: 0
  });

  const products = getAllProducts();
  
  // Apply filters
  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || 
      product.category.toLowerCase() === selectedCategory.toLowerCase())
    .filter(product => {
      const price = parseFloat(product.price);
      return price <= filters.priceRange;
    });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return parseFloat(a.price) - parseFloat(b.price);
      case 'price-desc':
        return parseFloat(b.price) - parseFloat(a.price);
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-500">Nos Produits</h1>
          <p className="mt-2 text-gray-600">Découvrez notre sélection exclusive</p>
        </div>
        
        <CategoryMenu 
          onCategorySelect={setSelectedCategory} 
          selectedCategory={selectedCategory} 
        />

        <div className="mt-8">
          <FilterBar 
            onFilterClick={() => setIsSidebarOpen(true)}
            totalProducts={sortedProducts.length}
          />

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {sortedProducts.map((product) => (
              <ProductGrid key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}