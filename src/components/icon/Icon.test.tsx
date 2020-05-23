import React from 'react';
import { Icon } from './Icon';
import { IconNames } from './icons.enum';
import { render } from '@testing-library/react';

describe('Icon', function () {
  test('it must render without crashing', function () {
    render(<Icon name={ IconNames.codeBranch } />);
  });
});