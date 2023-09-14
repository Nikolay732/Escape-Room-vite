import { FilterGenreValue, FilterLevelValue, NameSpace } from '../../const';
import { QuestListItem } from '../../types/quest';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchQuestsAction } from './quests-data-thunk';
import { FilterGenre, FilterLevel } from '../../types/filters';

type QuestsData = {
  questList: QuestListItem[];
  filterGenre: FilterGenre;
  filterLevel: FilterLevel;
};

const initialState: QuestsData = {
  questList: [],
  filterGenre: FilterGenreValue.All,
  filterLevel: FilterLevelValue.Any,
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setActiveGenreType(state, action: PayloadAction<FilterGenre>) {
      state.filterGenre = action.payload;
    },
    setActiveLevelType(state, action: PayloadAction<FilterLevel>) {
      state.filterLevel = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.questList = action.payload;
      });
  }
});

export const {setActiveGenreType, setActiveLevelType} = questsData.actions;
