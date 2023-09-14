import { FilterGenreValue } from '../../const';
import { FilterGenreItem } from '../filter-genre-item/filter-genre-item';


export function FilterGenreList () {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {Object.entries(FilterGenreValue).map(([key, value]) => <FilterGenreItem key={key} filter={value}/>)}
      </ul>
    </fieldset>
  );
}
