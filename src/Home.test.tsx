import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Home tests', () => {
    render(<Home />);
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
});