import { render, screen } from '@testing-library/react';
import App from '../../App';

test('Render Home, Basic Quiz, Detailed Quiz and Results links', () => {
    render(<App />);
    const homeLink = screen.getByRole("link", {name:/Home/})
    const basicLink = screen.getAllByRole("link", {name:/Basic Quiz/});
    const detailedLink = screen.getAllByRole("link", {name:/Detailed Quiz/});
    const resultsLink = screen.getByRole("link", {name:/Results/})
    expect(homeLink).toBeInTheDocument()
    expect(basicLink).toHaveLength(2);
    expect(detailedLink).toHaveLength(2);
    expect(resultsLink).toBeInTheDocument();
  });
    
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