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
  isQuestsLoading: boolean;
  isSelectedQuestLoading: boolean;
};

const initialState: QuestsData = {
  questList: [],
  selectedQuest: null,
  filterGenre: FilterGenreValue.All,
  filterLevel: FilterLevelValue.Any,
  isQuestsLoading: true,
  isSelectedQuestLoading: true,
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
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.selectedQuest = action.payload;
        state.isSelectedQuestLoading = false;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.isSelectedQuestLoading = true;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.isSelectedQuestLoading = false;
      });
  }
});

export const {setActiveGenreType, setActiveLevelType} = questsData.actions;
