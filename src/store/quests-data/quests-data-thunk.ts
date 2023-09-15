import {createAsyncThunk} from '@reduxjs/toolkit';
import { QuestListItem } from '../../types/quest';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { Quest } from '../../types/quest';

export const fetchQuestsAction = createAsyncThunk<QuestListItem[], undefined, ThunkAPI> (
  `${NameSpace.Quests}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<QuestListItem[]>(APIRoute.Quests);
    return data;
  },
);

export const fetchQuestAction = createAsyncThunk<Quest, string, ThunkAPI> (
  `${NameSpace.Quest}/fetch`,
  async (questId, {extra: api}) => {
    const {data} = await api.get<Quest>(`${APIRoute.Quests}/${questId}`);
    return data;
  },
);

