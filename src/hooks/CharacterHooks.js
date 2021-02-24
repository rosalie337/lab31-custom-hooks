import { useState, useEffect} from 'react';
import { getCharacterDetail, getCharacters } from '../services/fetchApi'
import loading from '../loading/Loading';

export const useCharacters = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
          .then(newCharacters => {
            setCharacters(newCharacters);
            setLoading(false);
          });
      }, []);

    return {
        loading,
        characters
    };
};

export const useCharacterDetails = (id) => {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getCharacterDetail(id)
        .then(newCharacter => {
          setCharacter(newCharacter);
          setLoading(false);
        });
    }, []);

    return {
        loading,
        character
    };
}