import { Link } from 'react-router-dom';
import { AppRoute, PageNameValue } from '../../const';
import { PageName } from '../../types/pages';

type LogoProps = {
  currentPage?: PageName;
}

export function Logo ({currentPage}: LogoProps) {
  if (currentPage === PageNameValue.Main) {
    return (
      <span className="logo header__logo">
        <svg width="134" height="52" aria-hidden="true">
          <use xlinkHref="#logo"></use>
        </svg>
      </span>
    );
  }
  return (
    <Link className="logo header__logo" to={AppRoute.Main} aria-label="Перейти на Главную">
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  );
}
