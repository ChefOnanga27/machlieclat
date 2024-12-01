import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
        <img src="/logo.jpg" alt="logo" className='w-30 h-30'/>
          {/* Logo et Nom */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-500">Machlie Eclat</span>
          </Link>
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className="text-white hover:bg-amber-500 hover:text-black px-3 py-2 text-sm font-medium transition-colors rounded-md"
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className="text-white hover:bg-amber-500 hover:text-black px-3 py-2 text-sm font-medium transition-colors rounded-md"
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-amber-500 hover:text-black px-3 py-2 text-sm font-medium transition-colors rounded-md"
            >
              À Propos
            </Link>
          </div>

          {/* Contact WhatsApp */}
          <a
            href="https://wa.me/+241162584"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors"
          >
            Contact WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}