import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../hooks/Theme'

function Characters({name, url}) {
    const { theme } = useTheme()

    return (
        <div>
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

