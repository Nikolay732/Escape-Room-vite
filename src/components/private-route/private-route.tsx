import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-process-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute ({children}: PrivateRouteProps) {
  const authStatus = useAppSelector(getAuthStatus);
  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>;
  }
  return children;
}
