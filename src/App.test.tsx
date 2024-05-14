import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Routing', () => {
  test('renders Home component on root route', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();  // Assume 'Home Content' is unique to the Home component
  });

  test('renders Home component on "/starter_helpi/" route', () => {
    window.history.pushState({}, '', '/starter_helpi/');
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders Home component on "/home" route', () => {
    window.history.pushState({}, '', '/home');
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders BasicQuestion component on "/basic" route', () => {
    window.history.pushState({}, '', '/basic');
    render(<App />);
    expect(screen.getByText('Basic Questions')).toBeInTheDocument();  // Assume 'Basic Questions' is unique to the BasicQuestion component
  });

  test('renders DetailedQuestion component on "/detailed" route', () => {
    window.history.pushState({}, '', '/detailed');
    render(<App />);
    expect(screen.getByText('Detailed Questions')).toBeInTheDocument();  // Assume 'Detailed Questions' is unique to the DetailedQuestion component
  });
});
