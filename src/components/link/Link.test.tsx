import React from 'react';
import { Link } from './Link';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Link', function () {
  test('it must render without crashing', function () {
    render(
      <MemoryRouter>
        <Link to="/whatever">You go</Link>
      </MemoryRouter>
    );
  })
});