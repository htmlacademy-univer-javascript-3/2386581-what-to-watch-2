import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import {
  getAvatarUrl,
  getAuthorizationStatus,
} from '../../store/user-data/selectors';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userAvatar = useAppSelector(getAvatarUrl);

  const handleClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(logoutAction());
      navigate(AppRoute.Root);
    }
  };

  return (
    <ul className="user-block">
      <Link to={AppRoute.MyList} className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={userAvatar || 'img/avatar.jpg'}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </Link>
      <li className="user-block__item" onClick={handleClick}>
        <Link to="#" className="user-block__link">
          {authorizationStatus === AuthorizationStatus.Auth
            ? 'Sign out'
            : 'Sign in'}
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
