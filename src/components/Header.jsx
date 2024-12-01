import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              Machlie Eclat
            </Link>
          </div>
          
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-purple-600">
                Accueil
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-purple-600">
                Produits
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600">
                À propos
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-purple-600">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-purple-600">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}