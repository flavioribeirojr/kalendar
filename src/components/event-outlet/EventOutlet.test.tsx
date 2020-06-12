import React from 'react';
import { EventOutlet } from './EventOutlet';
import { render } from '@testing-library/react';

describe('EventOutlet', function () {
    test('it must render without crashing', function () {
        render(<EventOutlet />);
    });
});