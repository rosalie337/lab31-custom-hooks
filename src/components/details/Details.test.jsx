/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Details from './Details';
import Character from '../data/Character.json';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(Character));
  })
);

describe('Details container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a loading screen then a character', async() => {
    render(<MemoryRouter>
      <Details
        match={{ params: { id: '5da237699734fdcb7bef8f5c' } }}  />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const figCaption = await screen.findByTestId('id');

    return waitFor(() => {
      expect(figCaption).not.toBeEmptyDOMElement();
    });
  });
});