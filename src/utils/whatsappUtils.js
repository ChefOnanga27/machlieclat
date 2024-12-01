export const createWhatsAppOrderLink = (product) => {
  const message = encodeURIComponent(
    `Bonjour, je souhaite commander le produit suivant :\n\n` +
    `Nom: ${product.name}\n` +
    `Catégorie: ${product.category}\n` +
    `Prix: ${product.price}`
  );
  
  // Replace with your actual WhatsApp number
  const phoneNumber = "+24162830351";
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
};