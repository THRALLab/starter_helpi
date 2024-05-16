import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders introduction text part 1', () => {
    render(<App />);
    const intro = screen.getByText(/Struggling to find your way?/i);
    expect(intro).toBeInTheDocument();
  });

test('renders introduction text part 2', () => {
  render(<App />);
  const intro = screen.getByText(/Looking for answers and coming up short?/i);
  expect(intro).toBeInTheDocument();
});

test('renders introduction text part 3', () => {
  render(<App />);
  const intro = screen.getByText(/Take the quiz that best suits your needs and worry no longer!/i);
  expect(intro).toBeInTheDocument();
});

  export {}