import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('App', function () {
  test('It must render without crashing', function () {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    });
});