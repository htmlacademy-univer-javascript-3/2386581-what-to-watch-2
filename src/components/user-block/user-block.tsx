import { useState, useEffect } from 'react';
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
  const [label, setLabel] = useState('');
  const [avatar, setAvatar] = useState('img/avatar.jpg');

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userAvatar = useAppSelector(getAvatarUrl);

  const handleClick = () => {
    if (label === 'Sign in') {
      navigate(AppRoute.Login);
    } else {
      dispatch(logoutAction());
      navigate(AppRoute.Root);
    }
  };

  useEffect(() => {
    switch (authorizationStatus) {
      case AuthorizationStatus.Auth:
        setLabel('Sign out');
        setAvatar(userAvatar);
        break;
      case AuthorizationStatus.NoAuth:
        setLabel('Sign in');
        setAvatar('img/avatar.jpg');
        break;
    }
  }, [authorizationStatus, userAvatar]);

  return (
    <ul className="user-block">
      <Link to={AppRoute.MyList} className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={avatar}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </Link>
      <li className="user-block__item" onClick={handleClick}>
        <Link to="#" className="user-block__link">
          {label}
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
