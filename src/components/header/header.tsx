import { Link } from 'react-router-dom';

export function Header () {
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
              <Link className="link active" to="index.html">Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="contacts.html">Контакты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="my-quests.html">Мои бронирования</Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <Link className="btn btn--accent header__side-item" to="#">Выйти</Link>
          <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
        </div>
      </div>
    </header>
  );
}
