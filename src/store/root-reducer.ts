import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { questsData } from './quests-data/quests-data-slice';
import { userProcess } from './user-process/user-process-slice';
import { bookingProcess } from './booking-process/booking-process-slice';

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Booking]: bookingProcess.reducer,
});
