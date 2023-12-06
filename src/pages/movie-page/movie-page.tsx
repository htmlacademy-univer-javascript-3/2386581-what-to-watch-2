import MoreLikeThis from '../../components/more-like-this/more-like-this';
import Tabs from '../../components/tabs/tabs';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import MainFimCard from '../../components/main-film-card/main-film-card';
import Loader from '../../components/loader/loader';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmInfo } from '../../store/api-actions';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getFilmInfo as getFilmInfoState } from '../../store/main-film-data/selectors';

function MoviePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmInfo = useAppSelector(getFilmInfoState);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getFilmInfo(id));
    }
  }, [dispatch, id]);

  if (!filmInfo) {
    return <Loader />;
  }

  return (
    <div>
      <section
        className="film-card film-card--full"
        style={{ background: `${filmInfo.backgroundColor}` }}
      >
        <div className="film-card__hero">
          <FilmCardBackground
            src={filmInfo.backgroundImage}
            alt={filmInfo.name}
          />

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head" />

          <MainFimCard filmInfo={filmInfo} isPromo={false} />
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster
              previewImage={filmInfo.posterImage}
              alt={filmInfo.name}
              className="film-card__poster--big"
            />

            <div className="film-card__desc">
              <Tabs filmData={filmInfo} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis filmId={filmInfo.id} />

        <Footer />
      </div>
    </div>
  );
}

export default MoviePage;
