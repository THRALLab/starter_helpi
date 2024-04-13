import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
//import RoutePaths from './RoutePaths';
import { HashRouter } from 'react-router-dom';

test('Home tests', () => {
    render(<HashRouter><Home /></HashRouter>);
    const linkElement = screen.getByText("The Career Lab");
    expect(linkElement).toBeInTheDocument();
});