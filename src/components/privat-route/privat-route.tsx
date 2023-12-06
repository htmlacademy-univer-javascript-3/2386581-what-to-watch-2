import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function PrivateRoute({ children }: PropsWithChildren) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children as JSX.Element;
  } else {
    return <Navigate to={AppRoute.Login} />;
  }
}

export default PrivateRoute;
