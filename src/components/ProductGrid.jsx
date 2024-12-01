import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ product }) {
  return (
    <div className="h-full">
      <ProductCard product={product} />
    </div>
  );
}