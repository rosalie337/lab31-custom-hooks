import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CharacterList from '../components/characters/CharacterList';
import Details from '../components/details/Details';

export default class AllCharacters extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>Hola from All Characters container!</h1>
                <CharacterList />
                <Details />
            </div>
        )
    }
}
