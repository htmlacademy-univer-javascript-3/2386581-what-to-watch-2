import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function ErrorPage(): JSX.Element {
  return (
    <div className="user-page">
      <div>404 Not Found</div>
      <Link to={AppRoute.Root}>на главную</Link>
    </div>
  );
}

export default ErrorPage;
