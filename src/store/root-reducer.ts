import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { questsData } from './quests-data/quests-data-slice';
import { userProcess } from './user-process/user-process-slice';

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
