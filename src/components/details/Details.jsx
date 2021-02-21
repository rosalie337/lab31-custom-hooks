import React from 'react'
import PropTypes from 'prop-types'

function Details({name, url, allies, enemies}) {

    const allyList = allies.map((ally, i) => {
        <li key={i}>{ally}</li>

    }) 
    
    const enemyList = enemies.map((enemies, i) => {
        <li key={i}>{enemy}</li>
    })

    return (
        <>
            <figure>
                <img src={url} />
                <figcaption>{name}</figcaption>  
            </figure>
            { (allyList > 0) &&
            <div>
                <h2>Allies</h2>
                <ul>{allyList}</ul>
            </div>
            }
            <h2>Enemies</h2>
            <ul>{enemyList}</ul>
        </>
    );
}

Details.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    allies: PropTypes.array,
    enemies: PropTypes.array
}

export default Details;

