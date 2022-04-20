import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/A Dead Simple Adventure Game Demo/i);
  expect(titleElement).toBeInTheDocument();
});
