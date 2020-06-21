import React from 'react';
import { NewEvent } from './NewEvent';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('NewEvent', function () {
  test('it must render without crashing', function() {
    render(
      <MemoryRouter>
        <NewEvent />
      </MemoryRouter>
    );
  });
});