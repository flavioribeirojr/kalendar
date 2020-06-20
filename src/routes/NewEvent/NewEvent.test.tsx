import React from 'react';
import { NewEvent } from './NewEvent';
import { render } from '@testing-library/react';

describe('NewEvent', function () {
  test('it must render without crashing', function() {
    render(<NewEvent />);
  });
});