import { FilterGenreValue, FilterLevelValue } from './const';
import { GenreType, LevelType } from './types/filters';

export const getGenreByRus = (type: GenreType) =>
  Object.entries(FilterGenreValue).find(([, genre]) => genre.type === type)?.[1].text;

export const getLevelByRus = (levelType: LevelType) =>
  Object.entries(FilterLevelValue).find(([,level]) => level.type === levelType)?.[1].text;

