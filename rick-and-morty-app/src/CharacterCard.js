import React from 'react';

function CharacterCard({ character, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={character.image} 
        alt={character.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{character.name}</h3>
      </div>
    </div>
  );
}

export default CharacterCard;