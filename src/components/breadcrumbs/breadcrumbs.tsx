import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { FilmCard } from '../../types';

type BreadcrumbsProps = {
  film: Pick<FilmCard, 'id' | 'title'>;
  title: string;
};

function Breadcrumbs({ film, title }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={AppRoute.Movie.replace(':id', film.id)}
            className="breadcrumbs__link"
          >
            {film.title}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">{title}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
