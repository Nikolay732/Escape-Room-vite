import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveFilterGenre } from '../../store/quests-data/quests-data-selectors';
import { setActiveGenreType } from '../../store/quests-data/quests-data-slice';
import { FilterGenre } from '../../types/filters';

type FilterGenreItemProps = {
  filter: FilterGenre;
}

export function FilterGenreItem ({filter}: FilterGenreItemProps) {
  const {text, type, icon} = filter;
  const dispatch = useAppDispatch();
  const activeFilterGenre = useAppSelector(getActiveFilterGenre);
  const isChecked = activeFilterGenre === filter;

  const handleChangeInput = () => {
    dispatch(setActiveGenreType(filter));
  };

  return (
    <li key={type} className="filter__item">
      <input
        onChange={handleChangeInput}
        type="radio"
        name="type"
        id={type}
        checked={isChecked}
      />
      <label className="filter__label" htmlFor={type}>
        <svg className="filter__icon" width={icon.width} height={icon.height} aria-hidden="true">
          <use xlinkHref={`#${icon.name}`}></use>
        </svg><span className="filter__label-text">{text}</span>
      </label>
    </li>
  );
}

