import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';

describe('App', function () {
  test('It must render without crashing', function () {
    render(<App />);
    });
});