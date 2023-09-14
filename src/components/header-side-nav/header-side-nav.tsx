import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus, PageNameValue} from '../../const';
import { useAppDispatch } from '../../hooks';
import {MouseEvent} from 'react';
import { logoutAction } from '../../store/user-process/user-process-thunkst';
import { PageName } from '../../types/pages';

type HeaderSideNavProps = {
  authStatus: AuthStatus;
  currentPage: PageName;
}

export function HeaderSideNav ({authStatus, currentPage}: HeaderSideNavProps) {
  const dispatch = useAppDispatch();
  const handleClickLogout = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  if (currentPage !== PageNameValue.Login) {
    return (
      <div className="header__side-nav">
        {
          authStatus === AuthStatus.Auth
            ? <Link className="btn btn--accent header__side-item" to={AppRoute.Main} onClick={handleClickLogout}>Выйти</Link>
            : <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
        }
        <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
      </div>
    );
  }
  return (
    <div className="header__side-nav">
      <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
    </div>
  )
}
