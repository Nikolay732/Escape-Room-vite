import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/user-process-selectors';
import { AppRoute, AuthStatus, PageNameValue } from '../../const';
import classNames from 'classnames';
import { HeaderSideNav } from '../header-side-nav/header-side-nav';
import { Logo } from '../logo/logo';
import { PageName } from '../../types/pages';

type HeaderProps = {
  currentPage: PageName;
}

export function Header ({currentPage}: HeaderProps) {
  const authStatus = useAppSelector(getAuthStatus);
  const isActiveLinkMain = currentPage === PageNameValue.Main || currentPage === PageNameValue.Login || currentPage === PageNameValue.Quest;
  const isNotDisabledLinkMain = currentPage !== PageNameValue.Main;
  const isActiveLinkContacts = currentPage === PageNameValue.Contacts;
  const isActiveLinkMyQuests = currentPage === PageNameValue.MyQuests;
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo currentPage={currentPage}/>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link
                className={classNames('link', {'active': isActiveLinkMain}, {'not-disabled': isNotDisabledLinkMain})}
                to={AppRoute.Main}
              >
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={classNames('link', {'active': isActiveLinkContacts})} to={AppRoute.Contacts}>Контакты</Link>
            </li>
            {
              authStatus === AuthStatus.Auth &&
              <li className="main-nav__item">
                <Link className={classNames('link', {'active': isActiveLinkMyQuests})} to="my-quests.html">Мои бронирования</Link>
              </li>
            }
          </ul>
        </nav>
        <HeaderSideNav authStatus={authStatus} currentPage={currentPage}/>
      </div>
    </header>
  );
}
