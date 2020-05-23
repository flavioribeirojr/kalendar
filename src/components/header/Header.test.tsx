import React from 'react';
import { Header } from './Header';
import { render } from '@testing-library/react';

describe('Header', function () {
  test('it must render without crashing', function () {
    render(<Header />);
  });
});