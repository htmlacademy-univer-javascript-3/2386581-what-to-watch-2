import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { FilmPreview } from '../../types';

type BreadcrumbsProps = {
  film: Pick<FilmPreview, 'id' | 'name'>;
  name: string;
};

function Breadcrumbs({ film, name }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={AppRoute.Movie.replace(':id', film.id)}
            className="breadcrumbs__link"
          >
            {film.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">{name}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
