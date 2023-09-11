import { NameSpace } from '../../const';
import { QuestListItem } from '../../types/quest';
import {createSlice} from '@reduxjs/toolkit';
import { fetchQuestsAction } from './quests-data-thunk';

type QuestsData = {
  questList: QuestListItem[];
};

const initialState: QuestsData = {
  questList: [],
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.questList = action.payload;
      });
  }
});
