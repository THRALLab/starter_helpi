import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicQuestion from './basic';
import { BrowserRouter } from 'react-router-dom';  // Used to wrap the component if `useNavigate` is used
import { JSX } from 'react/jsx-runtime';

// Helper to wrap component with router if needed
const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
};

describe('BasicQuestion Component', () => {
  test('renders without crashing', () => {
    renderWithRouter(<BasicQuestion />);
    expect(screen.getByText(/Basic Questions/i)).toBeInTheDocument();
  });

  test('displays the first question and answers', () => {
    renderWithRouter(<BasicQuestion />);
    expect(screen.getByText(/How do you prefer to work\?/i)).toBeInTheDocument();
    expect(screen.getByText('A. Independently')).toBeInTheDocument();
    expect(screen.getByText('B. Collaboratively in a team')).toBeInTheDocument();
  });
});
