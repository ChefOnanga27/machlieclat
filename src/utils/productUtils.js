const products = [
  // Vêtements Femmes (15 produits)
  {
    id: 'vf1',
    name: 'Robe Élégante Soirée',
    category: 'Vêtements Femmes',
    price: '89.99 €',
    description: 'Robe longue en soie pour occasions spéciales',
    imageSrc: './IMG-20241128-WA0002.jpg',
    characteristics: { Matière: 'Soie', Couleur: 'Noir', Tailles: 'S/M/L' }
  },
  {
    id: 'vf2',
    name: 'Tailleur Business',
    category: 'Vêtements Femmes',
    price: '129.99 €',
    description: 'Ensemble tailleur professionnel',
    imageSrc: 'public/IMG-20241128-WA0001.jpg',
    characteristics: { Matière: 'Polyester', Couleur: 'Beige', Tailles: 'S/M/L/XL' }
  },
  {
    id: 'vf3',
    name: 'Robe d\'Été Fleurie',
    category: 'Vêtements Femmes',
    price: '59.99 €',
    description: 'Robe légère à motifs floraux',
    imageSrc: 'public/IMG-20241128-WA0003.jpg',
    characteristics: { Matière: 'Coton', Couleur: 'Multicolore', Tailles: 'XS/S/M/L' }
  },
  {
    id: 'vf4',
    name: 'Blazer Chic',
    category: 'Vêtements Femmes',
    price: '79.99 €',
    description: 'Blazer tendance pour look professionnel',
    imageSrc: 'public/IMG-20241128-WA0004.jpg',
    characteristics: { Matière: 'Polyester', Couleur: 'Blanc', Tailles: 'S/M/L' }
  },
  {
    id: 'vf5',
    name: 'Jupe Plissée',
    category: 'Vêtements Femmes',
    price: '49.99 €',
    description: 'Jupe midi plissée élégante',
    imageSrc: 'public/IMG-20241128-WA0005.jpg',
    characteristics: { Matière: 'Polyester', Couleur: 'Rose', Tailles: 'S/M/L' }
  },
  {
    id: 'vf6',
    name: 'Pantalon Large',
    category: 'Vêtements Femmes',
    price: '69.99 €',
    description: 'Pantalon palazzo tendance',
    imageSrc: 'public/IMG-20241128-WA0006.jpg',
    characteristics: { Matière: 'Lin', Couleur: 'Beige', Tailles: 'XS/S/M/L' }
  },
  {
    id: 'vf7',
    name: 'Chemisier Soie',
    category: 'Vêtements Femmes',
    price: '69.99 €',
    description: 'Chemisier élégant en soie',
    imageSrc: '/IMG-20241128-WA0006.jpg',
    characteristics: { Matière: 'Soie', Couleur: 'Blanc', Tailles: 'S/M/L' }
  },
  {
    id: 'vf8',
    name: 'Robe Cocktail',
    category: 'Vêtements Femmes',
    price: '119.99 €',
    description: 'Robe courte pour cocktail',
    imageSrc: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae',
    characteristics: { Matière: 'Satin', Couleur: 'Rouge', Tailles: 'XS/S/M/L' }
  },
  {
    id: 'vf9',
    name: 'Ensemble Sport Chic',
    category: 'Vêtements Femmes',
    price: '89.99 €',
    description: 'Ensemble confortable et élégant',
    imageSrc: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    characteristics: { Matière: 'Coton', Couleur: 'Gris', Tailles: 'S/M/L' }
  },
  {
    id: 'vf10',
    name: 'Veste en Cuir',
    category: 'Vêtements Femmes',
    price: '149.99 €',
    description: 'Veste en cuir véritable',
    imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    characteristics: { Matière: 'Cuir', Couleur: 'Noir', Tailles: 'S/M/L' }
  },

  // Chaussures Femmes (15 produits)
  {
    id: 'cf1',
    name: 'Escarpins Classiques',
    category: 'Chaussures Femmes',
    price: '79.99 €',
    description: 'Escarpins élégants à talons hauts',
    imageSrc: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    characteristics: { Hauteur: '8cm', Couleur: 'Noir', Pointures: '36-41' }
  },
  {
    id: 'cf2',
    name: 'Sandales Dorées',
    category: 'Chaussures Femmes',
    price: '69.99 €',
    description: 'Sandales élégantes pour soirée',
    imageSrc: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33',
    characteristics: { Hauteur: '6cm', Couleur: 'Or', Pointures: '36-40' }
  },
  {
    id: 'cf3',
    name: 'Bottines Cuir',
    category: 'Chaussures Femmes',
    price: '99.99 €',
    description: 'Bottines en cuir véritable',
    imageSrc: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    characteristics: { Hauteur: '5cm', Couleur: 'Marron', Pointures: '36-41' }
  },
  {
    id: 'cf4',
    name: 'Ballerines Confort',
    category: 'Chaussures Femmes',
    price: '49.99 €',
    description: 'Ballerines confortables',
    imageSrc: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae',
    characteristics: { Style: 'Plat', Couleur: 'Beige', Pointures: '35-42' }
  },
  {
    id: 'cf5',
    name: 'Sandales Plates',
    category: 'Chaussures Femmes',
    price: '59.99 €',
    description: 'Sandales d\'été confortables',
    imageSrc: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33',
    characteristics: { Style: 'Plat', Couleur: 'Camel', Pointures: '36-41' }
  },

  // Habillement Maison (10 produits)
  {
    id: 'hm1',
    name: 'Coussin Luxe',
    category: 'Habillement Maison',
    price: '29.99 €',
    description: 'Coussin décoratif en velours',
    imageSrc: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6',
    characteristics: { Matière: 'Velours', Dimensions: '45x45cm', Entretien: 'Lavable' }
  },
  {
    id: 'hm2',
    name: 'Plaid Cachemire',
    category: 'Habillement Maison',
    price: '89.99 €',
    description: 'Plaid luxueux en cachemire',
    imageSrc: 'https://images.unsplash.com/photo-1462927114214-6956d2fddd4e',
    characteristics: { Matière: 'Cachemire', Dimensions: '150x200cm', Entretien: 'Nettoyage à sec' }
  },
  {
    id: 'hm3',
    name: 'Set de Table',
    category: 'Habillement Maison',
    price: '39.99 €',
    description: 'Set de table élégant',
    imageSrc: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
    characteristics: { Matière: 'Lin', Pièces: '6', Entretien: 'Lavable' }
  },
  {
    id: 'hm4',
    name: 'Rideau Velours',
    category: 'Habillement Maison',
    price: '79.99 €',
    description: 'Rideau en velours élégant',
    imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    characteristics: { Matière: 'Velours', Dimensions: '140x250cm', Entretien: 'Nettoyage à sec' }
  },
  {
    id: 'hm5',
    name: 'Nappe Brodée',
    category: 'Habillement Maison',
    price: '49.99 €',
    description: 'Nappe élégante brodée',
    imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f',
    characteristics: { Matière: 'Coton', Dimensions: '150x250cm', Entretien: 'Lavable' }
  },

  // Parfums (10 produits)
  {
    id: 'p1',
    name: 'Élixir de Nuit',
    category: 'Parfums',
    price: '89.99 €',
    description: 'Parfum oriental vanillé',
    imageSrc: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    characteristics: { Type: 'Eau de Parfum', Volume: '50ml', Notes: 'Oriental/Vanille' }
  },
  {
    id: 'p2',
    name: 'Fleur de Printemps',
    category: 'Parfums',
    price: '79.99 €',
    description: 'Parfum floral frais',
    imageSrc: 'https://images.unsplash.com/photo-1541643600914-78b084683601',
    characteristics: { Type: 'Eau de Toilette', Volume: '100ml', Notes: 'Floral/Frais' }
  },
  {
    id: 'p3',
    name: 'Mystère d\'Orient',
    category: 'Parfums',
    price: '99.99 €',
    description: 'Parfum oriental épicé',
    imageSrc: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    characteristics: { Type: 'Eau de Parfum', Volume: '75ml', Notes: 'Oriental/Épicé' }
  },
  {
    id: 'p4',
    name: 'Brise Marine',
    category: 'Parfums',
    price: '69.99 €',
    description: 'Parfum frais marin',
    imageSrc: 'https://images.unsplash.com/photo-1541643600914-78b084683601',
    characteristics: { Type: 'Eau de Toilette', Volume: '100ml', Notes: 'Marin/Frais' }
  },
  {
    id: 'p5',
    name: 'Rose Précieuse',
    category: 'Parfums',
    price: '109.99 €',
    description: 'Parfum floral rose',
    imageSrc: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    characteristics: { Type: 'Eau de Parfum', Volume: '50ml', Notes: 'Floral/Rose' }
  }
];

export function getAllProducts() {
  return products;
}

export function getProductsByCategory(category) {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}

export const categories = [
  'Vêtements Femmes',
  'Chaussures Femmes',
  'Habillement Maison',
  'Parfums'
];