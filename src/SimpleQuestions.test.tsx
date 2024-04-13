import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { SimpleQuestions } from './SimpleQuestions';

describe("Basic Page Tests", () => {
    test('Has Header', () => {
        render(<HashRouter><SimpleQuestions /></HashRouter>);
        const linkElement = screen.getByText("The Career Lab");
        expect(linkElement).toBeInTheDocument();
    });
    test('Has User Input', () => {
        render(<HashRouter><SimpleQuestions /></HashRouter>);
        const linkElement = screen.getByText("True");
        expect(linkElement).toBeInTheDocument();
    });
    test('Has Progress Bar', () => {
        render(<HashRouter><SimpleQuestions /></HashRouter>);
        const linkElement = screen.getByText("I am a hard worker");
        expect(linkElement).toBeInTheDocument();
    });
    test('Has Footer', () => {
        render(<HashRouter><SimpleQuestions /></HashRouter>);
        const linkElement = screen.getByText("API Key:");
        expect(linkElement).toBeInTheDocument();
    });
});