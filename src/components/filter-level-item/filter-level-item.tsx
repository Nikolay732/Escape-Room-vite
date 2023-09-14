import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveFilterLevel } from '../../store/quests-data/quests-data-selectors';
import { setActiveLevelType } from '../../store/quests-data/quests-data-slice';
import { FilterLevel } from '../../types/filters';

type FilterLevelItemProps = {
  filter: FilterLevel;
};

export function FilterLevelItem ({filter}: FilterLevelItemProps) {
  const {type, text} = filter;
  const dispatch = useAppDispatch();
  const activeFilterLevel = useAppSelector(getActiveFilterLevel);
  const isChecked = activeFilterLevel === filter;

  const handleChangeInput = () => {
    dispatch(setActiveLevelType(filter));
  };

  return (
    <li key={type} className="filter__item">
      <input
        onChange={handleChangeInput}
        type="radio"
        name="level"
        id={type}
        checked={isChecked}
      />
      <label className="filter__label" htmlFor={type}><span className="filter__label-text">{text}</span>
      </label>
    </li>
  );
}
