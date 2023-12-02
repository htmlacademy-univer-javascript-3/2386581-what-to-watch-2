import { useState, useEffect } from 'react';
import { AuthorizationStatus } from '../../const';

type UserBlockProps = {
  authStatus: AuthorizationStatus;
};

function UserBlock({ authStatus }: UserBlockProps): JSX.Element {
  const [label, setLabel] = useState('');

  useEffect(() => {
    switch (authStatus) {
      case AuthorizationStatus.Auth:
        setLabel('Sign out');
        break;
      case AuthorizationStatus.NoAuth:
        setLabel('Sign in');
        break;
    }
  }, [authStatus]);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">{label}</a>
      </li>
    </ul>
  );
}

export default UserBlock;
