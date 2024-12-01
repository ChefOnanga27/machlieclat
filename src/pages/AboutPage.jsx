import React from 'react';
import { FaStar, FaHandHoldingHeart, FaCrown, FaGem } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 to-white/95"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-amber-500 sm:text-5xl md:text-6xl">
              À Propos de Machlie Eclat
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Votre partenaire beauté de confiance, dédié à révéler votre éclat naturel
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="relative mb-20">
          <div className="flex items-center justify-center mb-8">
            <FaCrown className="text-4xl text-amber-500 mr-3" />
            <h2 className="text-3xl font-bold text-amber-500">Notre Mission</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Chez Machlie Eclat, nous nous engageons à vous offrir une sélection exclusive de produits de beauté 
              haut de gamme. Notre mission est de vous accompagner dans votre quête de beauté naturelle, 
              en vous proposant des produits authentiques et efficaces.
            </p>
          </div>
        </div>

        {/* Valeurs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <FaGem className="text-3xl text-amber-500 mr-3" />
              <h3 className="text-xl font-semibold text-amber-500">Qualité Premium</h3>
            </div>
            <p className="text-gray-600">
              Nous sélectionnons méticuleusement chaque produit pour garantir une qualité exceptionnelle.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <FaHandHoldingHeart className="text-3xl text-amber-500 mr-3" />
              <h3 className="text-xl font-semibold text-amber-500">Service Personnalisé</h3>
            </div>
            <p className="text-gray-600">
              Une équipe dévouée pour vous conseiller et vous accompagner dans vos choix.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <FaStar className="text-3xl text-amber-500 mr-3" />
              <h3 className="text-xl font-semibold text-amber-500">Excellence</h3>
            </div>
            <p className="text-gray-600">
              Nous visons l'excellence dans chaque aspect de notre service.
            </p>
          </div>
        </div>

        {/* Engagement Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold text-amber-500 text-center mb-6">Notre Engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-amber-500 mb-4">Pour Nos Clients</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                  Produits authentiques garantis
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                  Service client réactif et professionnel
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                  Conseils personnalisés
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-500 mb-4">Notre Qualité</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                  Sélection rigoureuse des produits
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                  Contrôle qualité strict
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-amber-500 rounded-full mr-3"></span>
                  Transparence totale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}