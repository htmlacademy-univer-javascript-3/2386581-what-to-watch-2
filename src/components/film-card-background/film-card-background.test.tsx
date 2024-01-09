import { render, screen } from '@testing-library/react';
import FilmCardBackground from './film-card-background';

describe('FilmCardBackground Component', () => {
  it('shold render a card background poster with the provided data', () => {
    render(
      <FilmCardBackground src="test" alt="test" />
    );
    const background = screen.getByAltText('test');

    expect(background).toBeInTheDocument();
  });
});
