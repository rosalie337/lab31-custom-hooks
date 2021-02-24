import React, { useState, useEffect } from 'react'
import CharacterList from '../components/characters/CharacterList';
import { useCharacters } from '../hooks/CharacterHooks'

const AllCharacters = () => {

    const { loading, characters } = useCharacters()
    
    if(loading) return <h1>Loading...</h1>;

    return <CharacterList data-testid="characters" characters={characters} />;
  
};

export default AllCharacters;
