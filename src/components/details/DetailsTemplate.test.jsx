/* eslint-disable max-len */
import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import DetailsTemplate from './DetailsTemplate';

describe('DetailsTemplate component', () => {
  afterEach(() => cleanup());
  it('renders DetailsTemplate', () => {
    const { asFragment } = render(<DetailsTemplate
      name="Baatar Jr."
      photoUrl="https://vignette.wikia.nocookie.net/avatar/images/4/45/Baatar_Jr..png/revision/latest?cb=20150409193510"
    />);    

    return waitFor(() => {expect(asFragment()).toMatchSnapshot()});
  });
});