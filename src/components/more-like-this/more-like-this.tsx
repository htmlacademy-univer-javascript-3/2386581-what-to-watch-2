import FilmList from '../film-list/film-list';

const MORE_FILMS_QUNATITY = 4;

function MoreLikeThis(): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList maxFilms={MORE_FILMS_QUNATITY} />
    </section>
  );
}

export default MoreLikeThis;
