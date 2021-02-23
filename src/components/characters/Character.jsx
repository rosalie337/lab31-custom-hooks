import React from 'react'
import PropTypes from 'prop-types'

function Characters({name, url}) {
    return (
        <>
            <figure>
                <img src={url} />
                <figcaption>{name}</figcaption>  
            </figure>
        </>
    )
}

Characters.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

export default Characters

