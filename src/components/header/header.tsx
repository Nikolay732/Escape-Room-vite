import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-process-selectors';
import { AppRoute, Pages } from '../../const';
import classNames from 'classnames';

type HeaderProps = {
  currentPage: string;
}

export function Header ({currentPage}: HeaderProps) {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={classNames('link', {'active': currentPage === Pages.main})} to={AppRoute.Main}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={classNames('link', {'active': currentPage === Pages.contacts})} to="contacts.html">Контакты</Link>
            </li>
            {
              authStatus &&
              <li className="main-nav__item">
                <Link className={classNames('link', {'active': currentPage === Pages.myQuest})} to="my-quests.html">Мои бронирования</Link>
              </li>
            }
          </ul>
        </nav>
        <div className="header__side-nav">
          {currentPage === Pages.main && <Link className="btn btn--accent header__side-item" to={AppRoute.Login}>Выйти</Link>}
          <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
        </div>
      </div>
    </header>
  );
}
