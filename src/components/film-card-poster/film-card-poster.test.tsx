import { render, screen } from '@testing-library/react';
import FilmCardPoster from './film-card-poster';

describe('FilmCardPoster Component', () => {
  it('shold render a poster with the provided data', () => {
    render(
      <FilmCardPoster previewImage="test" alt="test" />
    );
    const poster = screen.getByAltText('test');

    expect(poster).toBeInTheDocument();
  });
});
