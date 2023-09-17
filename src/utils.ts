import { DateBookingQuestValue, FilterGenreValue, FilterLevelValue } from './const';
import { DateBookingQuest } from './types/booking';
import { GenreType, LevelType } from './types/filters';

export const getGenreByRus = (type: GenreType) =>
  Object.entries(FilterGenreValue).find(([, genre]) => genre.type === type)?.[1].text;

export const getLevelByRus = (levelType: LevelType) =>
  Object.entries(FilterLevelValue).find(([,level]) => level.type === levelType)?.[1].text;

export const getDateTextByRus = (date: DateBookingQuest) => date === DateBookingQuestValue.Today ? 'Сегодня' : 'Завтра';

export const getFormattedDateTime = (date: DateBookingQuest, time: string): string => {
  const formattedTime = time.split(':');
  return `${date}${formattedTime[0]}h${formattedTime[1]}m`;
};

