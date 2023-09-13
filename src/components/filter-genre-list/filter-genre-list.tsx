import { FilterGenreValue } from '../../const';
import { FilterGenreItem } from '../filter-genre-item/filter-genre-item';


export function FilterGenreList () {
  return (
    <ul className="filter__list">
      {Object.entries(FilterGenreValue).map(([key, value]) => <FilterGenreItem filter={value} key={key}/>)}
    </ul>
  );
}
