import React from 'react'
import PropTypes from 'prop-types'

function Characters({name, url}) {
    return (
        <div className={themeStyle} >
            <figure>
                <img src={url} />
                <figcaption>{name}</figcaption>  
            </figure>
        </div>
    )
}

Characters.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

export default Characters

