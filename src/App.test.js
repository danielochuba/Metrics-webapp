import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const moviesText = screen.getByText('Movies Hub');
  expect(moviesText).toBeInTheDocument();
});
