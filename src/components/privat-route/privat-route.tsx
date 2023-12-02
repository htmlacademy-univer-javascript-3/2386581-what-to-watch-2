import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/store';

function PrivateRoute({ children }: PropsWithChildren) {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children as JSX.Element;
  } else {
    return <Navigate to={AppRoute.Login} />;
  }
}

export default PrivateRoute;
