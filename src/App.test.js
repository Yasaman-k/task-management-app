import { render, screen } from '@testing-library/react';
import AppRoot from './app';
import Home from './pages/home';
import { MemoryRouter } from 'react-router-dom';

test('Home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/index/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Page404 component for non-existing routes', () => {
  render(
    <MemoryRouter initialEntries={['/non-existing-route']}>
      <AppRoot />
    </MemoryRouter>,
  );

  expect(screen.getByText(/page/i)).toBeInTheDocument(); // Adjust this based on actual text in Page404 component
});
