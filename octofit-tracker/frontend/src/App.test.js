import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OctoFit Tracker heading', () => {
  render(<App />);
  const headingElements = screen.getAllByText(/OctoFit Tracker/i);
  expect(headingElements.length).toBeGreaterThan(0);
});
