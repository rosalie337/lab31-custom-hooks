export const getCharacters = () => {
    return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
      .then(res => res.json())
      .then(characters => characters.map(character => ({
        name: character.name,
        id: character._id,
        url: character.photoUrl,
      })));
  };
  
export const getCharacterDetail = (id) => {
    // eslint-disable-next-line max-len
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
      .then(res => res.json());
  
  };