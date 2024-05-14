import { render, screen } from '@testing-library/react';
import Home from './home';

// Test to check if the Home component renders without crashing
it('renders without crashing', () => {
  render(<Home />);
  expect(screen.getByText('Career Compass')).toBeInTheDocument();
  expect(screen.getByText('Empowering Your Professional Journey with short and fun career tests.')).toBeInTheDocument();
});

// Test to check if all sections are present
it('contains all main sections', () => {
  render(<Home />);
  // Using getByRole to precisely target headings if they are marked up semantically
  expect(screen.getByRole('heading', { name: 'Detailed Questions' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Basic Questions' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Comparison of Assessments' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Your career is a journey, not a destination.' })).toBeInTheDocument();
});

// Test to check if images are rendered with correct sources
it('renders images with correct sources', () => {
  render(<Home />);
  const images = screen.getAllByRole('img');
  expect(images[0]).toHaveAttribute('src', 'engineering.jpeg');
  expect(images[1]).toHaveAttribute('src', 'art.jpeg');
  expect(images[2]).toHaveAttribute('src', 'corporate.jpeg');
  expect(images[3]).toHaveAttribute('src', 'medical.jpeg');
});

// Snapshot Test
it('matches snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

