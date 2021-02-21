import React from 'react'
import PropTypes from 'prop-types'
import Characters from './Characters'

function CharacterList(props) {
    return (
        <div>
            <h1>Hola from CharacterList Component!</h1>
            <Characters />
        </div>
    )
}

CharacterList.propTypes = {

}

export default CharacterList

