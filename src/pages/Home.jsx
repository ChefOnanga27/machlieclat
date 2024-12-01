import React from 'react';
import Hero from '../components/hero/Hero';
import MainCategories from '../components/sections/MainCategories';
import BestSellers from '../components/sections/BestSellers';
import NewArrivals from '../components/sections/NewArrivals';
import Testimonials from '../components/sections/Testimonials';
import SpecialOffers from '../components/sections/SpecialOffers';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MainCategories />
        <BestSellers />
        <NewArrivals />
        <SpecialOffers />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  );
}