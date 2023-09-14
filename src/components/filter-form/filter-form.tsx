import { FilterGenreList } from '../filter-genre-list/filter-genre-list';
import { FilterLevelList } from '../filter-level-list/filter-level-list';

export function FilterFrom () {
  return (
    <div className="page-content__item">
      <form className="filter" action="#" method="get">
        <FilterGenreList/>
        <FilterLevelList/>
      </form>
    </div>
  );
}
