import React from 'react';
import { EventOutlet } from './EventOutlet';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
    Switch: () => null,
    Route: () => null
}));

jest.mock('../../routes/EventHome/EventHome.tsx', () => ({
    EventHome: () => null
}));

jest.mock('../../routes/NewEvent/NewEvent.tsx', () => ({
    NewEvent: () => null
}));

describe('EventOutlet', function () {
    test('it must render without crashing', function () {
        render(<EventOutlet />);
    });
});