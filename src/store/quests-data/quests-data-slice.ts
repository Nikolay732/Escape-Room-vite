import { FilterGenreValue, FilterLevelValue, NameSpace } from '../../const';
import { QuestListItem } from '../../types/quest';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchQuestAction, fetchQuestsAction } from './quests-data-thunk';
import { FilterGenre, FilterLevel } from '../../types/filters';
import { Quest } from '../../types/quest';
type QuestsData = {
  questList: QuestListItem[];
  selectedQuest: Quest | null;
  filterGenre: FilterGenre;
  filterLevel: FilterLevel;
};

const initialState: QuestsData = {
  questList: [],
  selectedQuest: null,
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
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.selectedQuest = action.payload;
      });
  }
});

export const {setActiveGenreType, setActiveLevelType} = questsData.actions;
