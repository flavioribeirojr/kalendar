import React from 'react';
import { MonthDayCell } from './MonthDayCell';
import { render } from '@testing-library/react';

describe('MonthDayCell', function () {
    test('it must render without crashing', function () {
        render(<MonthDayCell day={{ day: new Date() }} />);
    });
});