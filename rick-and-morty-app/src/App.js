import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import CharacterModal from './CharacterModal';

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
    const data = await response.json();
    setCharacters(data.results);
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Personajes de Rick and Morty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map(character => (
          <CharacterCard 
            key={character.id} 
            character={character} 
            onClick={() => handleCardClick(character)}
          />
        ))}
      </div>
      {selectedCharacter && (
        <CharacterModal 
          character={selectedCharacter} 
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;