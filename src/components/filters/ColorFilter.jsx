import React from 'react';

const colors = [
  { name: 'Blanc', value: 'white', class: 'bg-white' },
  { name: 'Noir', value: 'black', class: 'bg-black' },
  { name: 'Rose', value: 'pink', class: 'bg-pink-500' },
  { name: 'Violet', value: 'purple', class: 'bg-purple-500' },
  { name: 'Bleu', value: 'blue', class: 'bg-blue-500' },
];

export default function ColorFilter({ selectedColors, setSelectedColors }) {
  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="text-sm font-medium text-gray-900">Couleurs</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColors.includes(color.value)
                ? 'border-purple-500'
                : 'border-gray-200'
            } ${color.class}`}
            onClick={() => toggleColor(color.value)}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}