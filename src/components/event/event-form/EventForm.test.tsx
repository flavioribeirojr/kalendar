import React from 'react';
import { EventForm } from './EventForm';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('EventForm', function () {
  test('it must render without crashing', function () {
    render(
      <MemoryRouter>
        <EventForm title="Somewhere over the rainbow" />
      </MemoryRouter>
    );
  });
});