import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { HashRouter } from 'react-router-dom';

describe("Home Page Tests", () => {
    test('Has Header', () => {
        render(<HashRouter><Home /></HashRouter>);
        const linkElement = screen.getByText("The Career Lab");
        expect(linkElement).toBeInTheDocument();
    });
    test('Has Basic Button', () => {
        render(<HashRouter><Home /></HashRouter>);
        const linkElement = screen.getByText("Basic Quiz");
        expect(linkElement).toBeInTheDocument();
    });
    test('Has Detailed Button', () => {
        render(<HashRouter><Home /></HashRouter>);
        const linkElement = screen.getByText("Detailed Quiz");
        expect(linkElement).toBeInTheDocument();
    });
    test('Has Basic Explanation', () => {
        render(<HashRouter><Home /></HashRouter>);
        const linkElement = screen.getByText("This is a basic quiz with 15 questions.");
        const linkElement2 = screen.getByText("It will take around X to Y minutes to complete.");
        const linkElement3 = screen.getByText("The questions are simple and multiple choice.");
        expect(linkElement && linkElement2 && linkElement3).toBeInTheDocument();
    });
    test('Has Detailed Explanation', () => {
        render(<HashRouter><Home /></HashRouter>);
        const linkElement = screen.getByText("This is a detailed quiz with 30 questions.");
        const linkElement1 = screen.getByText("It will take around Y to Z minutes to complete.");
        const linkElement2 = screen.getByText("The questions are answered on a scale.");
        expect(linkElement && linkElement1 && linkElement2).toBeInTheDocument();
    });
    test('Has Footer', () => {
        render(<HashRouter><Home /></HashRouter>);
        const linkElement = screen.getByText("API Key:");
        expect(linkElement).toBeInTheDocument();
    });
});