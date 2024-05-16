import { render, screen } from '@testing-library/react';
import App from '../../App';
import HomePage from '../HTML/homePage';

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

  test('Render Dark mode button', () => {
    render(<App/>);
    const darkButton = screen.getByTestId("dark-mode")
    expect(darkButton).toBeInTheDocument();
  })

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

test('Render Piechart', () => {
  const pieChart = screen.getAllByTestId("pieChart")
  const pieChartLegend = screen.getByTestId("pieLegend");
  expect(pieChart).toBeInTheDocument();
  expect(pieChartLegend).toBeInTheDocument();
})


test('Render textbox for API input', () => {
  render(<App/>);
  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeInTheDocument();
})

test('Render API Submit Button', () => {
  render(<App/>);
  const submitButton = screen.getByRole("button", {name:"Submit"})
  expect(submitButton).toBeInTheDocument();
})

  export {}