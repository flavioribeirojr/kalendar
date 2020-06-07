import React from 'react';
import { WeekNames } from './WeekNames';
import { render } from '@testing-library/react';

describe('WeekNames', function () {
  test('it must render without crashing', function () {
    render(<WeekNames />);
  });
})