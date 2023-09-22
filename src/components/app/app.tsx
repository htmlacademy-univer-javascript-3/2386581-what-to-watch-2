import MainPage from '../../pages/main-page/main-page';
import type { FilmCard } from '../../types';

type AppProps = {
    filmCards: FilmCard[];
  }

function App({filmCards}: AppProps): JSX.Element {
  return <MainPage filmCards={filmCards}/>;
}

export default App;
