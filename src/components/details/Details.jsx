import React from 'react'
import PropTypes from 'prop-types'
import { useCharacterDetails } from '../../hooks/CharacterHooks';
import DetailsTemplate from '../details/DetailsTemplate';

function Details({ match }) {

  const { loading, character } = useCharacterDetails(match.params.id)

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <DetailsTemplate {...character} />
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

