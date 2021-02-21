import React, { useState, useEffect } from 'react'
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/fetchApi';

const AllCharacters = () => {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
          .then(newCharacters => {
            setCharacters(newCharacters);
            setLoading(false);
          });
      }, []);
    
    if(loading) return <h1>Loading...</h1>;

    return <CharacterList characters={characters} />;
  
};

export default AllCharacters;
