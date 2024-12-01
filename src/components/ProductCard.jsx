import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      {/* Image Container avec aspect-ratio fixe */}
      <div className="relative w-full pt-[100%]">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Contenu du produit */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-amber-600 mb-4">{product.price}</p>
        
        {/* Caractéristiques du produit */}
        <div className="mb-4">
          {product.characteristics && (
            <ul className="text-sm text-gray-600">
              {Object.entries(product.characteristics).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium">{key}:</span> {value}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Bouton WhatsApp */}
        <a
          href={`https://wa.me/+24162830351?text=Je suis intéressé(e) par : ${product.name} à ${product.price}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors gap-2"
        >
          <FaWhatsapp className="text-xl" />
          <span>Commander sur WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;