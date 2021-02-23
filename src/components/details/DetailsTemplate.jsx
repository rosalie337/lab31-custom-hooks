/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function DetailsTemplate({ name, image, allies, enemies }) {

  const allyElements = allies?.map((ally, i) => {
    return <li key={i} style={{ fontWeight: 'normal' }}>{ally}</li>;
  });
        
  const enemyElements = enemies?.map((enemy, i) => {
    return <li key={(i * Math.random()) } style={{ fontWeight: 'normal' }}>{enemy}</li>;
  });

  return (
    <>
      <figure>
        <img src={image} />
        <figcaption data-testid="name" style={{ fontSize: '25px' }}>{name}</figcaption>
      </figure>
      
      { (allyElements?.length > 0)
        && <ul style={{ fontWeight: 'bold' }}>Allies: {allyElements} </ul>
      }

      { (enemyElements?.length > 0)
        && <ul style={{ fontWeight: 'bold' }}>Enemies: {enemyElements} </ul>
      }
    </>
  );
}

DetailsTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
};

export default DetailsTemplate;
