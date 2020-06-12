import React from 'react';
import { EventHome } from './EventHome';
import { render } from '@testing-library/react';

describe('EventHome', function () {
    test('it must render without crashing', function () {
        render(<EventHome />);
    });
});