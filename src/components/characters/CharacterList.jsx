import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Character from './Character'

function CharacterList({ characters }) {

    const characterElements = characters.map(character => {
        if(character.url) {

        return (
            <Link to={`/character/${character.id}`} 
            key={character.id}
            style={{ textDecoration: 'none', color: 'green' }}>
            <li style={{ listStyleType: 'none' }}>
                <Character name={character.name} url={character.url}/>
            </li>
            </Link>
        );
        }

    return;
    
    });

    return <ul data-testid="characters" >{characterElements}</ul>;
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      )
}

export default CharacterList;