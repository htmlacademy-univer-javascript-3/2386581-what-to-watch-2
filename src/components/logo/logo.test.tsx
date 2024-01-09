import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './logo';

describe('Logo Component', () => {
  it('should render logo with the correct text and attributes', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const logoLink = screen.getByTestId('logo-link');

    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
    expect(logoLink).toHaveTextContent('WTW');
  });

  it('should apply additional class name when provided', () => {
    render(
      <MemoryRouter>
        <Logo className="test" />
      </MemoryRouter>
    );

    const logoLink = screen.getByTestId('logo-link');

    expect(logoLink).toHaveClass('test');
  });
});
