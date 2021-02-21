import React from 'react'
import PropTypes from 'prop-types'

function Details({name, url}) {
    return (
        <>
            <figure>
                <img src={url} />
                <figcaption>{name}</figcaption>  
            </figure>
        </>
    );
}

Details.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Details;

