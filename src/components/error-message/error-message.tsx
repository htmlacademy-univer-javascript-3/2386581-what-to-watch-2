import { useAppSelector } from '../../hooks/store';
import { getUserError } from '../../store/user-data/selectors';
import { getMainFilmError } from '../../store/main-film-data/selectors';
import { getFilmsError } from '../../store/films/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const userError = useAppSelector(getUserError);
  const mainFimError = useAppSelector(getMainFilmError);
  const filmsError = useAppSelector(getFilmsError);
  const error = userError || mainFimError || filmsError;

  return error ? (
    <div className="error-message">
      {error}
    </div>
  ) : null;
}

export default ErrorMessage;
