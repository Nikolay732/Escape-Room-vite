import { NameSpace } from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { BookedQuestData, BookingInfoData } from '../../types/booking';
import { fetchBookedQuestsAction, fetchBookingInfoAction, sendBookingQuestAction } from './booking-process-thunks';

type BookingProcess = {
  bookingInfo: BookingInfoData[];
  myQuests: BookedQuestData[];
  selectedBookingPoint: BookingInfoData | null;
};

const initialState: BookingProcess = {
  bookingInfo: [],
  myQuests: [],
  selectedBookingPoint: null,
};

export const bookingProcess = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    changeBookingPointAction: (state, action: PayloadAction<BookingInfoData | null>) => {
      state.selectedBookingPoint = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookingInfoAction.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
      })
      .addCase(fetchBookedQuestsAction.fulfilled,(state, action) => {
        state.myQuests = action.payload;
      })
      .addCase(sendBookingQuestAction.fulfilled, (state, action) => {
        state.myQuests.push(action.payload);
      });
  }
});

export const {changeBookingPointAction} = bookingProcess.actions;
