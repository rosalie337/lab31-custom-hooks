/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';
import { NewTheme } from '../../hooks/Theme';

describe('Characters component', () => {
  afterEach(() => cleanup());
  it('renders Characters', () => {
    const { asFragment } = render(<NewTheme><Character
      characters={[{
        name: 'Arik',
        url: 'https://vignette.wikia.nocookie.net/avatar/images/6/6f/Arik.png/revision/latest?cb=20140808184002'
      }]}
    /></NewTheme>);
      
    expect(asFragment()).toMatchSnapshot();
  });
});