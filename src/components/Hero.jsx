import React from 'react';
import { Link } from 'react-router-dom';
import PromoBar from './hero/PromoBar';
import HeroImage from './hero/HeroImage';
import HeroContent from './hero/HeroContent';

export default function Hero() {
  return (
    <div className="relative">
      <PromoBar />
      <div className="relative">
        <HeroImage />
        <HeroContent />
      </div>
    </div>
  );
}