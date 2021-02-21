import React from 'react'
import PropTypes from 'prop-types'
import Characters from './Characters'

function CharacterList({ characters }) {

  const characterElements = characters.map(character => {
        <li key={character._id} >
            <Characters name={character.name} url={character.url}/>
        </li>;
  });
  
  return (
        <ul>
            {characterElements}
        </ul>
    
  )};

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      )
}

export default CharacterList

