import { FilterGenreList } from '../filter-genre-list/filter-genre-list';

export function FilterFrom () {
  return (
    <div className="page-content__item">
      <form className="filter" action="#" method="get">
        <fieldset className="filter__section">
          <legend className="visually-hidden">Тематика</legend>
          <FilterGenreList/>
        </fieldset>
        <fieldset className="filter__section">
          <legend className="visually-hidden">Сложность</legend>
          <ul className="filter__list">
            <li className="filter__item">
              <input type="radio" name="level" id="any" checked/>
              <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
              </label>
            </li>
            <li className="filter__item">
              <input type="radio" name="level" id="easy"/>
              <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
              </label>
            </li>
            <li className="filter__item">
              <input type="radio" name="level" id="middle"/>
              <label className="filter__label" htmlFor="middle"><span className="filter__label-text">Средний</span>
              </label>
            </li>
            <li className="filter__item">
              <input type="radio" name="level" id="hard"/>
              <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  );
}
