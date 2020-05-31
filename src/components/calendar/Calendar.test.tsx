import React from 'react';
import { Calendar } from './Calendar';
import { render } from '@testing-library/react';

describe('Calendar', function () {
  test('it must render without crashing', function () {
    render(<Calendar />);
  });
});