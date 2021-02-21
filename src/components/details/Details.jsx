import React from 'react'
import PropTypes from 'prop-types'
import { getCharacterDetail } from '../services/fetchAPI';

function Details({ match }) {

    const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterDetail(match.params.id)
      .then(newCharacter => {
        setCharacter(newCharacter);
        setLoading(false);
      });
  }, []);
  
  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <Details {...character} />
    </>
  );
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Details;

