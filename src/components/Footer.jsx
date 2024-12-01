import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À Propos */}
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">Machlie Eclat</h3>
            <p className="text-gray-300">
              Votre destination beauté de confiance pour des produits de qualité et un service personnalisé.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold text-amber-500 mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-amber-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-amber-500" />
                <span className="text-gray-300">+241 69 23 48</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-amber-500" />
                <span className="text-gray-300">contact@machlie-eclat.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-amber-500" />
                <span className="text-gray-300">Libreville, Gabon</span>
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-amber-500 mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/+24174162584"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Machlie Eclat. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}