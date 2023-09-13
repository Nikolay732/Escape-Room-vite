import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-process-selectors';
import { AppRoute, AuthStatus, Pages } from '../../const';
import classNames from 'classnames';
import { HeaderSideNav } from '../header-side-nav/header-side-nav';
import { Logo } from '../logo/logo';

type HeaderProps = {
  currentPage?: string;
}

export function Header ({currentPage}: HeaderProps) {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo currentPage={currentPage}/>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={classNames('link', {'active': currentPage === Pages.Main || Pages.Login})} to={AppRoute.Main}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={classNames('link', {'active': currentPage === Pages.Contacts})} to="contacts.html">Контакты</Link>
            </li>
            {
              authStatus === AuthStatus.Auth &&
              <li className="main-nav__item">
                <Link className={classNames('link', {'active': currentPage === Pages.MyQuest})} to="my-quests.html">Мои бронирования</Link>
              </li>
            }
          </ul>
        </nav>
        <HeaderSideNav authStatus={authStatus}/>
      </div>
    </header>
  );
}
