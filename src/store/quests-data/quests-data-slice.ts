import { FilterGenreValue, NameSpace } from '../../const';
import { QuestListItem } from '../../types/quest';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchQuestsAction } from './quests-data-thunk';
import { FilterGenre } from '../../types/filters';

type QuestsData = {
  questList: QuestListItem[];
  filterGenre: FilterGenre;
};

const initialState: QuestsData = {
  questList: [],
  filterGenre: FilterGenreValue.All
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setActiveGenreType(state, action: PayloadAction<FilterGenre>) {
      state.filterGenre = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.questList = action.payload;
      });
  }
});

export const {setActiveGenreType} = questsData.actions;
