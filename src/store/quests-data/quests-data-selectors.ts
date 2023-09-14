import { createSelector } from '@reduxjs/toolkit';
import { GenreTypeValue, LevelTypeValue, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getQuests = (state: State) => state[NameSpace.Quests].questList;
export const getActiveFilterGenre = (state: State) => state[NameSpace.Quests].filterGenre;
export const getActiveFilterLevel = (state: State) => state[NameSpace.Quests].filterLevel;
export const getQuestsByFilterGenre = createSelector([getQuests, getActiveFilterGenre], (questList, filterGenre) => {
  if (filterGenre.type === GenreTypeValue.All) {
    return questList;
  }
  return questList.filter((quest) => quest.type === filterGenre.type);
});

export const getQuestsByFilters = createSelector([getQuestsByFilterGenre, getActiveFilterLevel], (questList, filterLevel) => {
  if (filterLevel.type === LevelTypeValue.Any) {
    return questList;
  }
  return questList.filter((quest) => quest.level === filterLevel.type);
});
