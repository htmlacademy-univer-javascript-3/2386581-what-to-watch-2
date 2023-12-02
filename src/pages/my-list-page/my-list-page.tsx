import FilmList from '../../components/film-list/film-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks/store';

function MyListPage(): JSX.Element {
  const myList = useAppSelector((state) => state.films);

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList filmsByGenre={myList} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
