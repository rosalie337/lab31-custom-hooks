/* eslint-disable max-len */
import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import DetailsTemplate from './DetailsTemplate';

describe('DetailsTemplate component', () => {
  afterEach(() => cleanup());
  it('renders DetailsTemplate', () => {
    const { asFragment } = render(<DetailsTemplate
      name="Arnold Shortman"
      photoUrl="https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333"
    />);    

    return waitFor(() => {expect(asFragment()).toMatchSnapshot()});
  });
});