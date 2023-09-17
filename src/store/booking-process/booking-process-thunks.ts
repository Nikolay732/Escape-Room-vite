import { createAsyncThunk } from '@reduxjs/toolkit';
import { BookedQuestData, BookingInfoData, BookingQuestData} from '../../types/booking';
import { ThunkAPI } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';

export const fetchBookingInfoAction = createAsyncThunk<BookingInfoData[], string, ThunkAPI> (
  `${NameSpace.Booking}/fetch`,
  async (questId, {extra: api}) => {
    const {data} = await api.get<BookingInfoData[]>(`${APIRoute.Quests}/${questId}/booking`);
    return data;
  }
);

export const fetchBookedQuestsAction = createAsyncThunk<BookedQuestData[], undefined, ThunkAPI> (
  `${NameSpace.Reservation}/fetchBookedQuests`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<BookedQuestData[]>(APIRoute.Reservation);
    return data;
  }
);

export const sendBookingQuestAction = createAsyncThunk<BookedQuestData, {
  bookingQuest: BookingQuestData;
  questId: string;
}, ThunkAPI>(
  `${NameSpace.Booking}/send`,
  async ({bookingQuest, questId}, {extra: api}) => {
    const {data} = await api.post<BookedQuestData>(`${APIRoute.Quests}/${questId}/booking`, bookingQuest);
    return data;
  }
);

export const deleteBookedQuestAction = createAsyncThunk<void, string, ThunkAPI> (
  `${NameSpace.Reservation}/delete`,
  async (reservationId, {dispatch, extra: api}) => {
    await api.delete(`${APIRoute.Reservation}/${reservationId}`);
    dispatch(fetchBookedQuestsAction);
  }
);
