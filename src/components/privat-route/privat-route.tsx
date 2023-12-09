import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { checkAuthAction } from '../../store/api-actions';

function PrivateRoute({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch, authorizationStatus]);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children as JSX.Element;
  } else {
    return <Navigate to={AppRoute.Login} />;
  }
}

export default PrivateRoute;
