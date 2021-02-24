import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Character from './Character'
import { useTheme } from '../../hooks/Theme';
import styles from './Character.css';

function CharacterList({ characters }) {

    const { theme, setTheme } = useTheme()
    
    const handleChange = ({ target }) => {
      if(target.checked){
        setTheme('light');
      } else setTheme('dark');
    };

    const themeStyle = theme === 'dark' ? styles.dark : styles.light;
  
    const characterElements = characters.map(character => {
        if(character.url) {

        return (
            <div className={themeStyle} key={character.id}>
            <Link to={`/character/${character.id}`} 
            key={character.id}
            style={{ textDecoration: 'none', color: 'black' }}>
            <li style={{ listStyleType: 'grid' }}>
                <Character name={character.name} url={character.url}/>
            </li>
            </Link>
            <input type="checkbox" onChange={handleChange}></input>
            </div>
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