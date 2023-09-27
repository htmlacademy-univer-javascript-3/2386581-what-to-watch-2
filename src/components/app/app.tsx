import MainPage from '../../pages/main-page/main-page';
import type { FilmCard, MainFim } from '../../types';

type AppProps = {
  mainFilm: MainFim;
  filmCards: FilmCard[];
};

function App({ mainFilm, filmCards }: AppProps): JSX.Element {
  return <MainPage mainFilm={mainFilm} filmCards={filmCards} />;
}

export default App;
