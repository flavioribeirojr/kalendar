import React from 'react';
import { Footer } from './Footer';
import { render } from '@testing-library/react';

describe('Footer', function () {
  test('it must render without crashing', function () {
    render(<Footer />);
  });
});