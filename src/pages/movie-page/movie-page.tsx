import MoreLikeThis from '../../components/more-like-this/more-like-this';
import Tabs from '../../components/tabs/tabs';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import type { FilmInfo, Review } from '../../types';

type MoviePageProps = {
  filmData: FilmInfo;
  reviews: Review[];
};

function MoviePage({ filmData, reviews }: MoviePageProps): JSX.Element {
  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBackground
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster
              previewImage="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              className="film-card__poster--big"
            />

            <div className="film-card__desc">
              <Tabs filmData={filmData} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis />

        <Footer />
      </div>
    </div>
  );
}

export default MoviePage;
