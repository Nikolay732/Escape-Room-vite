import { FilterLevelValue } from '../../const';
import { FilterLevelItem } from '../filter-level-item/filter-level-item';

export function FilterLevelList () {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {Object.entries(FilterLevelValue).map(([key, value]) => <FilterLevelItem key={key} filter={value}/>)}
      </ul>
    </fieldset>
  );
}
