import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe("homePage.tsx test", () => {


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

  test('Darkmode function', () => {
    render(<App/>)
    const darkToggle = screen.getByTestId("dark-mode");
    fireEvent.click(darkToggle);
    expect(darkToggle).toHaveStyle({ color: 'black' });
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

test('Renders the pie chart', () => {
  render(<App />);
  const pieChart = screen.getByTestId('pieChart');
  expect(pieChart).toBeInTheDocument();
  });
  
  test('Render pie chart legends', () => {
    render(<App/>);
    const pieLegend1 = screen.getByText(/"I Loved It!"/)
    const pieLegend2 = screen.getByText(/"It was alright."/)
    const pieLegend3 = screen.getByText(/"I'm not so impressed."/)
    expect(pieLegend1).toBeInTheDocument();
    expect(pieLegend2).toBeInTheDocument();
    expect(pieLegend3).toBeInTheDocument();
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
})


  export {}